<script>
  const user = {
    name: ''
  }
</script>

<style>
  input {
    text-transform: capitalize;
  }
</style>

<section>
  <h1>
    Hello 
    <input bind:value={user.name} placeholder="good sir!" autofocus>, 
  </h1>
  <span>
    Please enter your name and let the challenge begin!
  </span>
</section>