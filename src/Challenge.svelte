<script>
  import ChallengeGreeting from './ChallengeGreeting.svelte';

  export let description = 'Just have fun!'
  export let id
  export let img
</script>

<article id="challenge-{id}">
  <ChallengeGreeting></ChallengeGreeting>

  <p>{description}</p>
  <!-- alt is empty as logically should repeat description -->
  <img src="{img}" alt="" />
</article>

<style>
  img, p {
    float: left;
    clear: both;
  }
</style>