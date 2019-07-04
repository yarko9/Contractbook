$(function () {
  // init specific tab component
  const init = function ($tabs) {
    const tabContent = $tabs.attr('data-tab-content');

    if (!tabContent) {
      return;
    }

    const $content = $(`[data-tab-content-id=${tabContent}]`);

    if (!$content) {
      return;
    }

    $tabs.find('[data-tab-id]').each(function (i, tabEl) {
      const $tab = $(tabEl);

      $tab.bind('click', function () {
        onClick($(this), $tabs, $content);
      });

      if (tabEl.hasAttribute('data-tab-default-active')) {
        onClick($(this), $tabs, $content);
      }
    });
  }

  // on click on tab
  const onClick = function ($tab, $tabs, $content) {
    const tabId = $tab.attr('data-tab-id');

    $tabs.find('.tabs-item--active').removeClass('tabs-item--active');
    $tab.addClass('tabs-item--active');

    $content.find('.tabs-content--visible').removeClass('tabs-content--visible');
    $content.find(`.tabs-content[data-tab=${tabId}]`).addClass('tabs-content--visible');
  }

  // find all tabs components, and init each
  $('.tabs').each(function (i, elem) {
    init($(elem))
  });
}());
