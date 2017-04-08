<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
		<h2>{{$t('test2.lifehammer')}}</h2>
		<p>{{ PageNames.HOME}}</p>
		<router-link :to="createPath(Pages.ABOUT, {[Params.NAME]: 'hendrikjan'})">About</router-link>
	</div>
</template>

