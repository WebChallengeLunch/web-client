<script>
  import ChallengeGreeting from './ChallengeGreeting.svelte';

  export let description = 'Just have fun!'
  export let id
</script>

<article id="challenge-{id}">
  <ChallengeGreeting></ChallengeGreeting>

  <p>{@html description}</p>
</article>

<style>
  img, p {
    float: left;
    clear: both;
  }

  img {
    max-width: 400px;
  }
</style>