$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.ledger-row',
        layoutMode: 'vertical',
        transitionDuration: '0.4s',
        stagger: 30
    });

    updateCount();

    // 1. Toggle Custom Dropdowns
    $('.selected-option').on('click', function(e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    });

    // 2. Handle Custom Selection
    $('.dropdown-list li').on('click', function() {
        var value = $(this).data('value');
        var text = $(this).text();
        
        var $wrapper = $(this).closest('.dropdown-wrapper');
        $wrapper.find('.selected-option').text(text).attr('data-value', value);
        $wrapper.removeClass('active');

        // Apply Isotope Filter
        filterRegistry();
    });

    // 3. Multi-Filter Function
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

    // 4. Update UI Counter
    $grid.on('arrangeComplete', function() {
        updateCount();
    });

    function updateCount() {
        var count = $grid.data('isotope').filteredItems.length;
        $('#filter-count').text(count.toString().padStart(2, '0'));
    }

    // Close menus when clicking outside
    $(document).on('click', function() {
        $('.dropdown-wrapper').removeClass('active');
    });
});