function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>]/g, function (m) {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}

function renderMainPage() {
  const app = document.getElementById("app");
  const backBtnContainer = document.getElementById("dynamicBackBtn");
  backBtnContainer.innerHTML = "";

  const schoolsGrid = `
        <div style="margin-bottom: 1rem;">
            <h1 style="font-size: 2.2rem; font-weight: 800;">📖 Выберите онлайн-школу</h1>
            <p style="color: #334155; margin-top: 0.5rem;">${schoolsData.length} проверенных образовательных платформ</p>
        </div>
        <div class="schools-grid">
            ${schoolsData
              .map(
                (school) => `
                <a href="#" class="school-card" data-id="${school.id}">
                    <div class="logo-placeholder">
                        ${school.logoUrl ? `<img src="${school.logoUrl}" alt="${school.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${school.logoInitial}'">` : school.logoInitial}
                    </div>
                    <div class="school-name">${school.name}</div>
                    <div style="font-size: 0.85rem; color: #4b5563; margin-top: 8px;">нажмите для деталей →</div>
                </a>
            `,
              )
              .join("")}
        </div>
    `;
  app.innerHTML = schoolsGrid;

  document.querySelectorAll(".school-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const id = card.getAttribute("data-id");
      const school = schoolsData.find((s) => s.id === id);
      if (school) {
        renderSchoolDetailPage(school);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

function renderSchoolDetailPage(school) {
  const app = document.getElementById("app");
  const backBtnContainer = document.getElementById("dynamicBackBtn");

  backBtnContainer.innerHTML = `<a href="index.html" class="back-home" id="backToMainBtn">← На главную</a>`;

  let reviewsHtml = "";
  if (school.reviews && school.reviews.length > 0) {
    reviewsHtml = school.reviews
      .map(
        (rev) => `
            <div class="review-item">
                <div class="review-author">${escapeHtml(rev.author)}</div>
                <div class="review-text">${escapeHtml(rev.text)}</div>
            </div>
        `,
      )
      .join("");
  } else {
    reviewsHtml = "<p>Пока нет отзывов, но школа активно развивается ✨</p>";
  }

  const detailHtml = `
        <div class="school-detail">
            <div class="detail-header">
                <div class="detail-logo">
                    ${school.logoUrl ? `<img src="${school.logoUrl}" alt="${school.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${school.logoInitial}'">` : school.logoInitial}
                </div>
                <div class="detail-title">
                    <h1>${school.name}</h1>
                    <div class="detail-meta">
                        <span class="badge">🏆 Лицензированная школа</span>
                        <span class="badge">💻 Онлайн-формат</span>
                    </div>
                </div>
            </div>
            <div class="detail-section">
                <div class="section-title">📘 О школе</div>
                <p style="line-height: 1.5; font-size: 1.05rem;">${escapeHtml(school.description)}</p>
            </div>
            <div class="detail-section">
                <div class="section-title">💰 Стоимость услуг</div>
                <div class="price-value">${escapeHtml(school.price)}</div>
                <p style="margin-top: 12px; color:#475569;">*актуальные цены уточняйте на официальном сайте</p>
            </div>
            <div class="detail-section">
                <div class="section-title">⭐ Отзывы учеников</div>
                ${reviewsHtml}
            </div>
            <div class="detail-section">
                <div class="section-title">🔗 Сайт школы</div>
                <a href="${school.siteUrl}" target="_blank" rel="noopener noreferrer" class="school-link">
                    Перейти на ${school.name} → 
                </a>
            </div>
        </div>
        <div style="margin-top: 1rem; text-align: center;">
            <a href="index.html" style="color:#2563eb; text-decoration: none; font-weight: 500;">🏠 Вернуться к списку школ</a>
        </div>
    `;
  app.innerHTML = detailHtml;

  const backBtn = document.getElementById("backToMainBtn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      renderMainPage();
      window.scrollTo({ top: 0 });
    });
  }

  const lowerLink = app.querySelector(
    'a[href="index.html"]:not(#backToMainBtn)',
  );
  if (lowerLink) {
    lowerLink.addEventListener("click", (e) => {
      e.preventDefault();
      renderMainPage();
      window.scrollTo({ top: 0 });
    });
  }

  updateUrlForSchool(school.id);
}

function updateUrlForSchool(schoolId) {
  const newUrl = `${window.location.pathname}?school=${schoolId}`;
  window.history.pushState({ page: "school", id: schoolId }, "", newUrl);
}

function initRouter() {
  const logoLink = document.querySelector(".logo a");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      renderMainPage();
      window.history.pushState({ page: "main" }, "", "index.html");
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const schoolId = urlParams.get("school");
  if (schoolId) {
    const found = schoolsData.find((s) => s.id === schoolId);
    if (found) {
      renderSchoolDetailPage(found);
      return;
    }
  }

  renderMainPage();

  window.addEventListener("popstate", function (event) {
    const currentParams = new URLSearchParams(window.location.search);
    const idFromUrl = currentParams.get("school");
    if (idFromUrl) {
      const school = schoolsData.find((s) => s.id === idFromUrl);
      if (school) renderSchoolDetailPage(school);
      else renderMainPage();
    } else {
      renderMainPage();
    }
  });
}

initRouter();
