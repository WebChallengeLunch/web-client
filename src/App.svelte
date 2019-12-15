<script>
  import Carousel from '@beyonk/svelte-carousel'
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons'

  import Challenge from './Challenge.svelte'
  import CodeEditor from './CodeEditor.svelte'
  import Finish from './Finish.svelte'
  import Greeting from './Greeting.svelte'

  function getChallenge() {
    const id = `svelte-338kgr`
    const settings = `ctl=1&embed=1&file=index.js&hideNavigation=1&view=editor`
    
    return {
      url: `https://stackblitz.com/edit/${id}?${settings}`,
      description: 'Make an application / a component with pages / scenarios the best you can!',
      id,
      img: 'https://raw.githubusercontent.com/andreasbm/masonry-layout/master/example.gif'
    }
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

  .control {
    color: rgb(51, 51, 161);
    z-index: 1000;
    font-weight: bold;
  }
</style>

<Carousel perPage={1} loop={false}>
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>

  <Greeting />
  <Challenge {...challenge}/>
  <CodeEditor />
  <Finish />

  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel>
