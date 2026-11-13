const listView = document.getElementById("list");
const detailView = document.getElementById("detail");
const rolesContainer = document.getElementById("roles");

document.getElementById("page-title").innerText = ROLE_DATA.title;
document.getElementById("page-sub").innerText = ROLE_DATA.subtitle;

function getTeamClass(team) {
  const t = (team || "").toLowerCase();
  if (t === "werewolf") return "wolf";
  if (t === "village") return "";
  return "solo";
}

ROLE_DATA.groups.forEach((group) => {
  const heading = document.createElement("h2");
  heading.innerText = group.title;
  rolesContainer.appendChild(heading);

  group.roles.forEach((role) => {
    const btn = document.createElement("button");
    btn.className = `role ${getTeamClass(role.team)}`.trim();
    btn.innerHTML = `
      <span>${role.name}</span>
      <small>${role.team}</small>
    `;
    btn.onclick = () => openDetail(role);
    rolesContainer.appendChild(btn);
  });
});

function openDetail(role) {
  document.getElementById("dname").innerText = role.name;
  document.getElementById("dteam").innerText = `Team: ${role.team}`;
  document.getElementById("ddesc").innerText = role.description || "No description added yet.";
  
  const tipEl = document.getElementById("dtip");
  if (role.tip) {
    tipEl.innerText = role.tip;
    tipEl.classList.remove("hidden");
  } else {
    tipEl.classList.add("hidden");
  }

  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
  window.scrollTo(0, 0);
}

document.getElementById("back").onclick = () => {
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");
};
