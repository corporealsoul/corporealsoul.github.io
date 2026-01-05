$(document).ready(function() {
    var $grid = $('.grid').isotope({
        itemSelector: '.ledger-row',
        layoutMode: 'vertical',
        transitionDuration: '0.4s',
        stagger: 30
    });

    updateCount();

    $('.selected-option').on('click', function(e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    });

    $('.dropdown-list li').on('click', function() {
        var value = $(this).data('value');
        var text = $(this).text();
        var $wrapper = $(this).closest('.dropdown-wrapper');
        $wrapper.find('.selected-option').text(text).attr('data-value', value);
        $wrapper.removeClass('active');
        filterRegistry();
    });

    function filterRegistry() {
        var year = $('#year-filter-wrapper .selected-option').attr('data-value');
        var cat = $('#cat-filter-wrapper .selected-option').attr('data-value');
        var tool = $('#tool-filter-wrapper .selected-option').attr('data-value');
        var type = $('#type-filter-wrapper .selected-option').attr('data-value');

        var filterValue = '';
        if (year !== '*') filterValue += year;
        if (cat !== '*') filterValue += cat;
        if (tool !== '*') filterValue += tool;
        if (type !== '*') filterValue += type;

        $grid.isotope({ filter: filterValue || '*' });
    }

    $grid.on('arrangeComplete', function() {
        updateCount();
    });

    function updateCount() {
        var count = $grid.data('isotope').filteredItems.length;
        $('#filter-count').text(count.toString().padStart(2, '0'));
    }

    $(document).on('click', function() {
        $('.dropdown-wrapper').removeClass('active');
    });
});