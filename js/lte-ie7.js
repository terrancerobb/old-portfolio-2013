/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'terryrobb\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-music' : '&#xf001;',
			'icon-search' : '&#xf002;',
			'icon-film' : '&#xf008;',
			'icon-th-list' : '&#xf00b;',
			'icon-signal' : '&#xf012;',
			'icon-download-alt' : '&#xf019;',
			'icon-headphones' : '&#xf025;',
			'icon-camera' : '&#xf030;',
			'icon-map-marker' : '&#xf041;',
			'icon-camera-retro' : '&#xf083;',
			'icon-comment' : '&#xf075;',
			'icon-linkedin-sign' : '&#xf08c;',
			'icon-rss' : '&#xf09e;',
			'icon-github' : '&#xf09b;',
			'icon-link' : '&#xf0c1;',
			'icon-google-plus-sign' : '&#xf0d4;',
			'icon-facebook-sign' : '&#xf082;',
			'icon-twitter-sign' : '&#xf081;',
			'icon-desktop' : '&#xf108;',
			'icon-laptop' : '&#xf109;',
			'icon-quill' : '&#xe000;',
			'icon-camera-2' : '&#xe001;',
			'icon-film-2' : '&#xe002;',
			'icon-camera-3' : '&#xe003;',
			'icon-tag' : '&#xe004;',
			'icon-tags' : '&#xe005;',
			'icon-equalizer' : '&#xe007;',
			'icon-mug' : '&#xe008;',
			'icon-link-2' : '&#xe009;',
			'icon-happy' : '&#xe00a;',
			'icon-facebook' : '&#xe00b;',
			'icon-google-plus' : '&#xe00c;',
			'icon-twitter' : '&#xe00d;',
			'icon-twitter-2' : '&#xe00e;',
			'icon-youtube' : '&#xe00f;',
			'icon-youtube-2' : '&#xe010;',
			'icon-github-2' : '&#xe011;',
			'icon-tumblr' : '&#xe012;',
			'icon-tumblr-2' : '&#xe013;',
			'icon-css3' : '&#xe014;',
			'icon-html5' : '&#xe015;',
			'icon-info-sign' : '&#xf05a;',
			'icon-lightbulb' : '&#xf0eb;',
			'icon-home' : '&#xe006;',
			'icon-briefcase' : '&#xe016;',
			'icon-envelope' : '&#xf003;',
			'icon-envelope-2' : '&#xe017;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};