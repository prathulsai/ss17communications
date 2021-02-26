.jq-checkbox,
.jq-radio {
	position: relative;
	display: inline-block;
	overflow: hidden;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.jq-checkbox input,
.jq-radio input {
	position: absolute;
	z-index: -1;
	margin: 0;
	padding: 0;
	opacity: 0;
}
.jq-file {
	position: relative;
	display: inline-block;
	overflow: hidden;
}
.jq-file input {
	position: absolute;
	top: 0;
	right: 0;
	height: auto;
	margin: 0;
	padding: 0;
	opacity: 0;
	font-size: 100px;
	line-height: 1em;
}
.jq-file__name {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.jq-selectbox,
.jq-select-multiple {
	position: relative;
	display: inline-block;
}
.jq-selectbox select,
.jq-select-multiple select {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	opacity: 0;
}
.jq-selectbox li,
.jq-select-multiple li {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	white-space: nowrap;
}
.jq-selectbox {
	z-index: 10;
}
.jq-selectbox__select {
	position: relative;
}
.jq-selectbox__select-text {
	overflow: hidden;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.jq-selectbox__dropdown {
	position: absolute;
}
.jq-selectbox__search input {
	-webkit-appearance: textfield;
}
.jq-selectbox__search input::-webkit-search-cancel-button,
.jq-selectbox__search input::-webkit-search-decoration {
	-webkit-appearance: none;
}
.jq-selectbox__dropdown ul {
	position: relative;
	overflow: auto;
	overflow-x: hidden;
	list-style: none;
	-webkit-overflow-scrolling: touch;
}
.jq-select-multiple ul {
	position: relative;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}
.jq-number {
	display: inline-block;
}
.jq-number__field {
	outline:none;
}
.jq-number__field input {
	-moz-appearance: textfield;
	text-align: left; /* для Opera Presto */
}
.jq-number__field input::-webkit-inner-spin-button,
.jq-number__field input::-webkit-outer-spin-button {
	margin: 0; /* в каких-то браузерах присутствует отступ */
	-webkit-appearance: none;
}