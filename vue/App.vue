<!-- Файл App.vue для родительского компонента, который будет использовать ReviewCard.vue -->
<template>

	<div>

		<div class="clients__bottom">

			<div class="clients__slider">

				<ReviewCard v-for="(review, index) in reviews" :key="index" :review="review"></ReviewCard>

			</div>

		</div>

	</div>

</template>

<script>

	import ReviewCard from './ReviewCard.vue';

	export default {
	components: {
		ReviewCard
	},
	data() {
		return {
		reviews: [] // Загруженные отзывы будут храниться здесь
		};
	},
	mounted() {
		// Здесь должны загружаться отзывы с сервера или из файла index.html
		// Пример: загрузка отзывов из файла index.html
		this.reviews = [
		{ name: "John", surname: "Doe", text: "Great service!"},
		// Добавьте больше отзывов, как необходимо
		];
	}
	}

</script>

<style>

</style>