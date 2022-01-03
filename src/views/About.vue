<template>
  <div class="flex justify-center">
    <div class="max-w-2xl w-full py-16">
      <h1 class="text-5xl font-bold text-blue-500 mb-2">Jasny Gwint</h1>
      <h2 class="text-2xl mb-8">Sklep wysyłkowy do pojedycznych brakujących śrubek</h2>
      <p>
        Naszym celem jest dostarczanie śrub w jak najbardziej uciążliwy sposób.
      </p>
      <p class="mb-4">
        Pewnie zapytacie dlaczego? Przecież to bez sensu wysyłać każdą śrubkę osobno.
        <br>
        Wiemy ale robimy to bo możemy i nie powinno was to interesować.
      </p>
      <h3 class="text-xl text-blue-500">
        Macie tu definicje śruby:
      </h3>
      <p>
        <b>Śruba</b> – element połączenia śrubowego. W budowie maszyn łączniki te znajdują różnorakie zastosowanie, dlatego też występują w wielu odmianach zawartych w normie PN-91/M-82055. Śruby, pod względem postaci, różnią się między sobą m.in. kształtem łba, zakończenia lub czopa, długością gwintu w stosunku do długości trzpienia, rodzajem gwintu oraz innymi szczegółami.
      </p>
      <h3 class="text-xl text-blue-500 mt-4">
        Godziny wysyłek
      </h3>
      <ul class="list-disc pl-6">
        <li>Poniedziałek - 14:00</li>
        <li>Wtorek - 14:00</li>
        <li>Środa - 14:00</li>
        <li>Czwartek - 14:00</li>
        <li>Piątek - 14:00</li>
      </ul>
      <span class="text-sm font-gray-100">
        W weekendy nie robimy, trzeba się szanować
      </span>
      <h3 class="text-xl text-blue-500 mt-4">
        Kontakt
      </h3>
      <span>
        Gwintowa 12/32<br>
        32-143 - Jasna Góra<br>
        +48 322 322 322<br>
        kontakt@alesupersklepzesrubamijasnygwintalefajny.xd
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../store/modules/auth";

const authStore = useAuthStore()
</script>