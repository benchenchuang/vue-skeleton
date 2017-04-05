<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div>
		<h2>{{$t('test2.lifehammer')}}</h2>
		<router-link :to="$localize({ name: 'about'})">About</router-link>
	</div>
</template>

