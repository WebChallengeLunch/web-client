<script>
  const user = {
    name: ''
  };
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
  <p>
    Please enter your name and let the challenge begin!
    Don't forget to <strong>fork</strong> first!
    In the future, we should use <a href="https://stackblitz.com/edit/sdk-create-project">stackblitz.com sdk</a> to generate project on the fly.
  </p>
</section>