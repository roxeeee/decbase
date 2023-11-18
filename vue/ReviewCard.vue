<!-- Файл ReviewCard.vue для компонента отзыва -->
<template>

	<div class="client__slider">
		<div class="slider__img">
			<img class="img__slider" alt="client">
		</div>

		<div class="slider__content">

			<div class="slider__content-up">
				<h1 class="slider__title">{{ review.name }}<span class="slider__subtitle">{{ review.surname }}</span></h1>
				<img class="content__img" src="img/quotes.png" alt="icons">
			</div>
			<div class="slider__content-bottom">
				<p class="slider__desc">{{ review.text }}</p>
			</div>

		</div>

	</div>

</template>

<script>

	export default {
	props: {
		review: {
		type: Object,
		required: true
		}
	}
	}

</script>

<style>

</style>