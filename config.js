/* ===========================================================================
   SIGNAGE CONFIG — this is the only file you normally edit.

   Two sections:
     SCHEDULES — named sets of 31 Google Slides decks, one per day of month
     DISPLAYS  — each physical screen, and which schedule it shows

   Several displays can share one schedule. That is the normal case when the
   same menu runs in multiple buildings.
   =========================================================================== */

var SCHEDULES = {

  /* -------------------------------------------------------------------------
     Dietary menu — migrated from the Chrome Sign Builder JSON export.
     Source decks in Drive: BCCB_Dietary_Menu_1st .. BCCB_Dietary_Menu_31st
     These decks are shared with other displays; do not merge or rename them.
     ------------------------------------------------------------------------- */
  'dietary-menu': {
    label: 'BCCB Dietary Menu',
    delayMs: 10000,
    decks: [
      null,
      '2PACX-1vRamzAF_yc7iEv-UpqUFxjtlpcWsdTQtavgsXujWtdmtS9ISQJKv2k4Sgtsd5hgUJCusL5Y4Mn2AQNx', // 1st
      '2PACX-1vSGJD-QoZeqqdJZtKvGZq2LlLiy5hsVE9lHiElS6TRqKuvX7mujjuxjNraK4fMISg2fA0LzeaTa4Jc6', // 2nd
      '2PACX-1vQP2e9rP1ZMFVQO-xvKHSt6EUUZSEaL7z8tjX28Pq-vghLE3yPgN2eA4QtfF75aau0j9D6Yo-S8is-S', // 3rd
      '2PACX-1vQ3-FzIXbF-OC--EUn3EQ9LtxnOVNfaRDq9ap-AV3PQcpCfxio8L60yetHsCWe33jRUBQIFu5DvJB6g', // 4th
      '2PACX-1vRbt21AOBaqpq6coAD-FtZcFueEWM4w9C4pY_-iIRMNh2lAOqciLjPqOY5z4ZOtTuZQ4SYbthx3mBXX', // 5th
      '2PACX-1vT3ngdE1ygYzNSWkQd5YwMCEbZBQxUxFSbrpSlgM8_YMDECPMcFCHKKjCocRuYO9TlqKvU46FwodlbA', // 6th
      '2PACX-1vRve8IlJz-4gZOxmc5G_nrB-2Jt20fQII7UHg60QLdmFJ71Xa7dso-bPBo5llPboEIPSXj1uSYteMYg', // 7th
      '2PACX-1vSdy-uqiSTU_850mnU8HSlJRjYkXk13KkNaIwsMhlhyjRC7r7lEpENwLEGRi9v8oIqCVIJaiiN0QrEb', // 8th
      '2PACX-1vT1mu_HmsbwfxA_-gb4i1GeSPYQHpAdnPFZy0U327xRC2m7-RKatc0EstPNygBuNMJwRbPTSSvu1vIG', // 9th
      '2PACX-1vSOuYt72i5j8zgdMzVvc3ecx8YEd4CZf4IhFuTExwjbfL-wEgNFYEL9CMulz8GYDhq9otxQAxCIJMqs', // 10th
      '2PACX-1vTo18TAAVAxTtLbI2TM4w48vWAHFQHwtUXBRqON3lnXJbWSd2GQ5H3ExPTFMEDon3nffLIYEWRD-am7', // 11th
      '2PACX-1vSPjvMdXH1x7gd6-Yf56iOPfcZUUPOnhpd8GOSg3Y2AlUsCfT7v1FO5TXgh5SpWUU8eRAKQ1NMCFZnU', // 12th
      '2PACX-1vREFrSQDTafeug8RZAtZli9a3W4caRS3Vbjl2PH7xUDybUqIbK_18CoV1a-2pvzAdKY2cWfTCCi042a', // 13th
      '2PACX-1vSIXuF3_uyKoYV8zZqGDgzFjFYj8RSHt9jX2OIiWID-aUG_KOJnLgWIAHXYoGvEsmE0pFpj4QnTULGP', // 14th
      '2PACX-1vT0MnV2TEr4dW7RslrMtuxvE4U1ZNGTdSOEagB8Erf5M7uk_brWV-_xoiHCKZBGlRyA-nvPqj1Po4T5', // 15th
      '2PACX-1vS7tEJbKJ_ux5tD5G4E6RIRPnuMaFpfEnVxHDn_gosnUq4mW37YOB_-NoH6p1Ym7oS1ez_My8L_0spl', // 16th
      '2PACX-1vTfGmj3X9cdqI-v4WcEyU8W9HzgA5TZkcGTqR2R8gJSWGepO_iTBFP0AvkG-CEMQjqKS109UITaPSdW', // 17th
      '2PACX-1vRvWEzvo48wbJ5vY8Vqhwjd8SV9iajLsx53XmwPyhQGo8IKNcF7dIUN4zm95tEYhHtZ7IwcsJaiQQGu', // 18th
      '2PACX-1vRcpP_BmWfPhyJvGsWgOhvO9Q9N94US6U5J0-yr-OX8CupBKFPF48KzLLz1GZHSaOG26yiFbExMOUfR', // 19th
      '2PACX-1vRD6mnf41gBE7ukw-c9NPXhgfMXh1V_0HUZsyvfcOjQpOO3wmaUFmZoGJahVP9bPnZa2k4e4z9JTgnz', // 20th
      '2PACX-1vSoVGDpqYIFnBW52EwBxSSzQmVSUYeHmU-8hWuLbm4dONTNUrJjqnZEYw2T9OFZFuS7e0C4_r3F3TX_', // 21st
      '2PACX-1vSEhA2_M1Ok_y651PrBEWqr3YRlkTYdWcufKO__8xR-n7s2kCbyfiO1oRHp6J-F2zD3KnUuvdxpeDfa', // 22nd
      '2PACX-1vRbEIPVPc3tSKYdmACelUvlcF38qrjj2J1fmznm-n8L8boVyZhm4cf_yGPC7jC8spUTZR65iED0deI8', // 23rd
      '2PACX-1vRlJ4t-kpHBFqF8vpmUqobYoiFV6PI6FEGhq7rqIAlBx_V9jPX2WgGoU3A9xKdTq0cTNeF5axVjxdmW', // 24th
      '2PACX-1vSQL8ItUVDAXcYCyVOl2pyDThCzwYIUfMGEggN5Utl_3hhWopoEcksC7DH_vs_Dz8KVAQPAhPnAxaJF', // 25th
      '2PACX-1vTGUaeumb7RZ-gNIkKHCpniB6mX7OFSmBDhRDd1zvbtoClahosZJ0QrDqDnfb4PuTyg14zqpBt9iX2F', // 26th
      '2PACX-1vTnYo-REsS5v90ulzIp3KbeRoNJuUUSSpV_zri-regyUqvem3NhlDAMDXUEak5FAmhIQO6KSZ9tdxEJ', // 27th
      '2PACX-1vSGJuqw0nsfsM8iXaVkTy7a8cAbFDouX_yZDW9oGGpI6QrsQ2ArbC2YW3c5P6YZkuoqI2whmAjRvySG', // 28th
      '2PACX-1vTfFxej2gXdTTEiVqaRW9iBala-SBeMhlb1M8ukNrfAKdHEAQNVnP_I6kW5NpXKCm399DLNJYylMntK', // 29th
      '2PACX-1vS2f1kvPzgeIMxrAqJSS2PyNW6Apdr14mvxLAB4_0l6Sc2C_DPVNMz-PqJMPlh8ezXqATn_SDjN0E3u', // 30th
      '2PACX-1vQtwmZiwSSOmipHfn1O9OYZHjZsCUIV1cUuB9WmyYwTHBNRXr1EsLQZQqR1Cvda9q6FI8YJN7yHJyY4'  // 31st
    ]
  }

  /* -------------------------------------------------------------------------
     BCCB Employee Breakroom — migrated from its Sign Builder JSON export.
     Original schedule name: "Looping Slide Display".
     A single deck that runs every day, with no date rotation. Uses "static"
     rather than "decks" for that reason.
     ------------------------------------------------------------------------- */
  ,'bccb-breakroom': {
    label: 'BCCB Employee Breakroom',
    delayMs: 10000,
    static: '2PACX-1vRKwwZ76yYxzFgVRBdbd07RzpPuQj_biFqGSZpCzAxtb5Ux1z7drxQmOgN-w4waMbKIkTQsDe4qvX_J'
  }

  /* -------------------------------------------------------------------------
     BCCB Activities Schedule — migrated from its Sign Builder JSON export.
     Original schedule name: "31 Day Schedule".

     Different shape from the dietary menu. This is ONE published deck with 31
     slides inside it; each day jumps to a specific slide rather than loading a
     different file. Uses "deck" plus "slides" for that reason.

     The slide IDs came from the Sign Builder export. If someone deletes and
     recreates a slide in this deck, its ID changes and that day falls back to
     the first slide. To get a slide's ID, open it in the editor and copy the
     part of the URL after "#slide=id.".

     Also note: this one does not auto-advance. Sign Builder held a single
     static slide all day (start=false, loop=false), so "hold: true" below
     reproduces that.
     ------------------------------------------------------------------------- */
  ,'bccb-activities': {
    label: 'BCCB Activities Schedule',
    hold: true,
    deck: '2PACX-1vTd4VP8_C9NKBb5K36w4wZTfwGXw0feJ_ARf1UJSrAooNh2fYQnzqO_-X-rVJtLhjFBti__FS6ynENP',
    slides: [
      null,
      'g33d7be9ac1a_0_37',   // 1st
      'g33d7be9ac1a_0_1342', // 2nd
      'g33d7be9ac1a_0_1351', // 3rd
      'g33d7be9ac1a_0_1360', // 4th
      'g33d7be9ac1a_0_1369', // 5th
      'g33d7be9ac1a_0_1378', // 6th
      'g33d7be9ac1a_0_1387', // 7th
      'g33d7be9ac1a_0_1396', // 8th
      'g33d7be9ac1a_0_1405', // 9th
      'g33d7be9ac1a_0_1414', // 10th
      'g33d7be9ac1a_0_1423', // 11th
      'g33d7be9ac1a_0_1432', // 12th
      'g33d7be9ac1a_0_1441', // 13th
      'g33d7be9ac1a_0_1450', // 14th
      'g33d7be9ac1a_0_1459', // 15th
      'g33d7be9ac1a_0_1468', // 16th
      'g33d7be9ac1a_0_1477', // 17th
      'g33d7be9ac1a_0_1486', // 18th
      'g33d7be9ac1a_0_1495', // 19th
      'g33d7be9ac1a_0_1504', // 20th
      'g33d7be9ac1a_0_1513', // 21st
      'g33d7be9ac1a_0_1522', // 22nd
      'g33d7be9ac1a_0_1531', // 23rd
      'g33d7be9ac1a_0_1540', // 24th
      'g33d7be9ac1a_0_1549', // 25th
      'g33d7be9ac1a_0_1558', // 26th
      'g33d7be9ac1a_0_1567', // 27th
      'g33d7be9ac1a_0_1576', // 28th
      'g33d7be9ac1a_0_1585', // 29th
      'g33d7be9ac1a_0_1594', // 30th
      'g33d7be9ac1a_0_1603'  // 31st
    ]
  }

  /* -------------------------------------------------------------------------
     To add another schedule, copy one of the blocks above and change the key,
     label, and IDs. There are three shapes, matching the three kinds of Sign
     Builder schedule you had:

     1. A different published deck each day (like the dietary menu):

  ,'example-a': {
    label: 'Example',
    delayMs: 10000,
    decks: [ null, 'PASTE_1st', 'PASTE_2nd', ... 'PASTE_31st' ]
  }

     2. One published deck, looping all day, every day (like the breakroom):

  ,'example-b': {
    label: 'Example',
    delayMs: 10000,
    static: 'PASTE_DECK_ID'
  }

     3. One published deck, a different slide each day, held static
        (like the activities schedule):

  ,'example-c': {
    label: 'Example',
    hold: true,
    deck: 'PASTE_DECK_ID',
    slides: [ null, 'PASTE_1st', 'PASTE_2nd', ... 'PASTE_31st' ]
  }
     ------------------------------------------------------------------------- */
};


var DISPLAYS = {

  /* One entry per physical screen. The key is what goes in the kiosk URL:
       https://YOURORG.github.io/signage/?id=bldg-a-dining

     "schedule" must match a key in SCHEDULES above.
     "location" is a note for you; it is never shown on screen.

     "rotate" turns the picture on screen. Omit it, or use 0, for screens
     that are already the right way up. Valid values: 0, 90, 180, 270.

       90  = quarter turn clockwise
       180 = upside down
       270 = quarter turn counter-clockwise

     If 90 comes out upside down, use 270. This is done in the page rather
     than in the Admin console, because ChromeOS removed the kiosk screen
     rotation policy along with Chrome App kiosk support. Doing it here also
     means portrait and landscape screens can share one organizational unit. */

  'bldg-a-dining':  { schedule: 'dietary-menu', rotate: 90, location: 'Building A - dining room' },
  'bldg-b-dining':  { schedule: 'dietary-menu', rotate: 90, location: 'Building B - dining room' },
  'bldg-c-dining':  { schedule: 'dietary-menu', rotate: 90, location: 'Building C - dining room' },
  'bldg-d-dining':  { schedule: 'dietary-menu', rotate: 90, location: 'Building D - dining room' },

  'bccb-breakroom': { schedule: 'bccb-breakroom', rotate: 0, location: 'BCCB - employee breakroom' },

  'bccb-activities': { schedule: 'bccb-activities', rotate: 0, location: 'BCCB - activities schedule' }

  /* Add the remaining screens here, for example:
  ,'bldg-a-lobby':  { schedule: 'lobby-welcome', rotate: 0, location: 'Building A - main lobby' }
  */
};


// Used when a display ID is missing or unrecognized in the URL.
var DEFAULT_DISPLAY = 'bldg-a-dining';
