// Sprint 1: apenas comportamento visual (menu e modais). Sem regras de negócio nem acesso à API.

const MENU = [
  { href: "index.html", label: "Início" },
  { href: "pacientes.html", label: "Pacientes" },
  { href: "profissionais.html", label: "Profissionais" },
  { href: "consultas.html", label: "Consultas" },
  { href: "internacoes.html", label: "Internações" },
  { href: "quartos.html", label: "Quartos" },
  { href: "historico.html", label: "Histórico Médico" },
];

function renderSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;
  const current = location.pathname.split("/").pop() || "index.html";
  const links = MENU.map(
    (item) => `<a href="${item.href}"${item.href === current ? ' class="active"' : ""}>${item.label}</a>`
  ).join("");
  sidebar.innerHTML = `<div class="brand">SIH<small>Sistema de Informação Hospitalar</small></div><nav>${links}</nav>`;
}

function setupModals() {
  document.querySelectorAll("[data-open]").forEach((btn) =>
    btn.addEventListener("click", () => document.getElementById(btn.dataset.open).classList.add("open"))
  );
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest("[data-close]")) modal.classList.remove("open");
    });
  });
  document.querySelectorAll("form").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Funcionalidade disponível nas próximas sprints.");
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  setupModals();
});
