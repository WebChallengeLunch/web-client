<script>
  import Carousel from '@beyonk/svelte-carousel'
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'

  import Challenge from './Challenge.svelte'
  import CodeEditor from './CodeEditor.svelte'
  import Finish from './Finish.svelte'
  import Greeting from './Greeting.svelte'

  import { paymentWidgetChallenge } from './challenges.js'

  function getChallenge() {
    return paymentWidgetChallenge
  }

  const challenge = getChallenge()
</script>

<!-- Include styles -->
<style>
  h1, h2 {
    font-weight:300;
    font-family: Lato;
  }
  .logo-font {
    text-transform: lowercase;
    font-size:2.5rem;
    font-family: 'Rajdhani', sans-serif;
    color: #aa1e1e;
  }
</style>

<Carousel perPage={1} loop={false}>
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>

  <Greeting /> 
  <Challenge {...challenge}/>
  <CodeEditor {...challenge} />
  <Finish />

  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel>
