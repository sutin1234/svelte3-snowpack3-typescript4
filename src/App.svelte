<script>
  import './main.css';
  import '@fortawesome/fontawesome-free/js/all'
  import { timer } from './timer';
  import { interval } from 'rxjs';
  import { map, startWith } from 'rxjs/operators';
  import Header from '@/layouts/Header.svelte'
  const rxTimer = interval(1000).pipe(
    startWith(0),
    map((v) => v * 2)
  );
</script>

<div class="app">
  <Header />
</div>
