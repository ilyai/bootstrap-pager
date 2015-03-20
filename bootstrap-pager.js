//
// Bootstrap Pager plugin
// working with Pager component (http://getbootstrap.com/components/#pagination-pager)
// Compatible with Bootstrap v3.1.1
// by Ilya Igonkin, 2015
//
// Usage:
//   $('.my-panel').bootstrapPager();
//
(function($) {
	function Pager(element) {
		this.$element = $(element);
		this.$pages = this.$element.find('.pages').children();
		this.$active = this.$pages.first();
		this.$previous = this.$element.find('.pager>.previous');
		this.$next = this.$element.find('.pager>.next');
		this.$next.find(':link').on('click', $.proxy(function(e) {
			e.preventDefault();
			this.next();
		}, this));
		this.$previous.find(':link').on('click', $.proxy(function(e) {
			e.preventDefault();
			this.prev();
		}, this));
		this.refresh();
	}

	Pager.prototype.refresh = function() {
		this.$pages.not(this.$active).hide()
			.addBack().filter(this.$active).show();
		if (this.at(-1)) {
			this.$next.addClass('disabled');
			this.$previous.removeClass('disabled');
		}
		if (this.at(0)) {
			this.$previous.addClass('disabled');
			this.$next.removeClass('disabled');
		}
		if (!this.at(0) && !this.at(-1)) {
			this.$previous.removeClass('disabled');
			this.$next.removeClass('disabled');

		}
	};

	Pager.prototype.at = function(index) {
		return (index >= 0)
			? this.$pages.index(this.$active) === index
			: this.$pages.index(this.$active) === this.$pages.length + index;
	};

	Pager.prototype.next = function() {
		if (this.at(-1)) return;
		this.$active = this.$active.next();
		this.refresh();
	};

	Pager.prototype.prev = function() {
		if (this.at(0)) return;
		this.$active = this.$active.prev();
		this.refresh();
	};

	$.fn.bootstrapPager = function() {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('bs.pager');
			if (!data) $this.data('bs.pager', (data = new Pager(this)));
		});
	};
})(jQuery);
