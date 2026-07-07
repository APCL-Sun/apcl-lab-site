// 모바일 화면에서 상단 메뉴(햄버거 버튼)를 열고 닫는 스크립트입니다.
// 이 파일은 후배분들이 수정할 필요가 없습니다.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Publications 페이지 탭 필터링
  var tabs = document.querySelectorAll(".pub-tab");
  var groups = document.querySelectorAll(".pub-group");
  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var target = tab.getAttribute("data-target");
        groups.forEach(function (g) {
          g.style.display = (target === "all" || g.id === target) ? "" : "none";
        });
      });
    });
  }
});
