
(function () {
    "use strict";

    var listView = document.getElementById("list-view");
    var detailView = document.getElementById("detail-view");
    var rolesContainer = document.getElementById("roles");
    var searchInput = document.getElementById("search");
    var clearSearchButton = document.getElementById("clear-search");
    var teamFilter = document.getElementById("team-filter");
    var groupFilter = document.getElementById("group-filter");
    var resultCount = document.getElementById("result-count");
    var emptyState = document.getElementById("empty-state");

    var previousScrollY = 0;

    function teamLabel(team) {
        return TEAM_LABELS[team] || team || "Unspecified";
    }

    function setOptionalSection(sectionId, textId, value) {
        var section = document.getElementById(sectionId);
        var text = document.getElementById(textId);

        if (value) {
            text.textContent = value;
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    }

    function populateGroupFilter() {
        ROLE_DATA.groups.forEach(function (group) {
            var option = document.createElement("option");

            option.value = group.id;
            option.textContent = group.title;

            groupFilter.appendChild(option);
        });
    }

    function makeRoleButton(role, group) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "role-card team-" + (role.team || "variable");

        var name = document.createElement("span");
        name.className = "role-name";
        name.textContent = role.name;

        var team = document.createElement("span");
        team.className = "role-team";
        team.textContent = teamLabel(role.team);

        button.appendChild(name);
        button.appendChild(team);

        button.addEventListener("click", function () {
            showRole(role, group);
        });

        return button;
    }

    function renderRoles() {
        var query = searchInput.value.trim().toLowerCase();
        var selectedTeam = teamFilter.value;
        var selectedGroup = groupFilter.value;
        var visibleCount = 0;

        rolesContainer.textContent = "";

        ROLE_DATA.groups.forEach(function (group) {
            if (selectedGroup !== "all" && selectedGroup !== group.id) {
                return;
            }

            var matchingRoles = group.roles.filter(function (role) {
                var matchesTeam =
                    selectedTeam === "all" ||
                    role.team === selectedTeam;

                var searchable = [
                    role.name,
                    role.description,
                    role.ability,
                    role.winCondition,
                    role.tip,
                    teamLabel(role.team),
                    group.title
                ].join(" ").toLowerCase();

                return matchesTeam &&
                    searchable.indexOf(query) !== -1;
            });

            if (matchingRoles.length === 0) {
                return;
            }

            var heading = document.createElement("h2");
            heading.className = "group-title";
            heading.textContent = group.title;

            var list = document.createElement("div");
            list.className = "role-list";

            matchingRoles.forEach(function (role) {
                list.appendChild(makeRoleButton(role, group));
                visibleCount++;
            });

            rolesContainer.appendChild(heading);
            rolesContainer.appendChild(list);
        });

        resultCount.textContent =
            visibleCount + (visibleCount === 1 ? " role" : " roles");

        emptyState.hidden = visibleCount !== 0;
        clearSearchButton.hidden = searchInput.value.length === 0;
    }

    function showRole(role, group) {
        previousScrollY = window.scrollY;

        document.getElementById("detail-group").textContent =
            group.title;

        document.getElementById("detail-name").textContent =
            role.name;

        document.getElementById("detail-description").textContent =
            role.description || "No description has been added yet.";

        var team = document.getElementById("detail-team");

        team.textContent = teamLabel(role.team);
        team.className = "team-pill team-" + (role.team || "variable");

        var timing = document.getElementById("detail-timing");

        if (role.timing) {
            timing.textContent = role.timing;
            timing.classList.remove("hidden");
        } else {
            timing.classList.add("hidden");
        }

        setOptionalSection(
            "ability-section",
            "detail-ability",
            role.ability
        );

        setOptionalSection(
            "win-section",
            "detail-win",
            role.winCondition
        );

        setOptionalSection(
            "tip-section",
            "detail-tip",
            role.tip
        );

        listView.classList.add("hidden");
        detailView.classList.remove("hidden");

        window.scrollTo(0, 0);
        document.getElementById("back").focus();
    }

    function goBack() {
        detailView.classList.add("hidden");
        listView.classList.remove("hidden");

        window.scrollTo(0, previousScrollY);
    }

    document.getElementById("page-title").textContent =
        ROLE_DATA.title || "Werewolf Roles";

    document.getElementById("page-sub").textContent =
        ROLE_DATA.subtitle || "";

    document.title = ROLE_DATA.title || "Werewolf Roles";

    searchInput.addEventListener("input", renderRoles);
    teamFilter.addEventListener("change", renderRoles);
    groupFilter.addEventListener("change", renderRoles);

    clearSearchButton.addEventListener("click", function () {
        searchInput.value = "";
        renderRoles();
        searchInput.focus();
    });

    document.getElementById("back").addEventListener("click", goBack);

    populateGroupFilter();
    renderRoles();

    if ("serviceWorker" in navigator &&
        (location.protocol === "https:" ||
        location.hostname === "localhost" ||
        location.hostname === "127.0.0.1")) {

        window.addEventListener("load", function () {
            navigator.serviceWorker.register("./service-worker.js")
                .catch(function (error) {
                    console.error(
                        "Service worker registration failed:",
                        error
                    );
                });
        });
    }
}());
