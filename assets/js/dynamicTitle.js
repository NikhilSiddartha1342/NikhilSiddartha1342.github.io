window.onload = function () {
  const favicon = document.getElementById('favicon');
  const pageTitle = document.title;
  const attentionMessage = 'Nikhil Siddartha | Portfolio';

  document.addEventListener('visibilitychange', function () {
    const isPageActive = !document.hidden;
    toggle(isPageActive);
  });

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle;
      if (favicon) favicon.href = './assets/images/favicon.png';
    } else {
      document.title = attentionMessage;
      if (favicon) favicon.href = './assets/images/favicon.png';
    }
  }
};
