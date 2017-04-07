<style src="./AboutPage.scss" module lang="scss"></style>
<script src="./AboutPage.js"></script>

<template>
	<div>
		<h2>{{$t('test')}}</h2>
		<router-link :to="$localize({ name: PageNames.HOME })">Home</router-link>
	</div>
</template>

