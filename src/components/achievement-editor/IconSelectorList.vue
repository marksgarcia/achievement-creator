<template>
  <div class="icons-selector">
    <section class="search-bar">
      <input
        type="text"
        class="search"
        v-model="search"
        placeholder="Search for an icon"
      />
      <span class="clear-button" v-if="search !== ''" @click="clearSearch">
        <font-awesome-icon :icon="['fas', 'times-circle']"></font-awesome-icon>
      </span>
    </section>
    <div class="list-wrapper">
      <ul>
        <li v-for="icon in searchIcons" :key="icon" @click="setIcon(icon)">
          <font-awesome-icon
            :icon="[icon.class, icon.icon]"
          ></font-awesome-icon>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const icons = [
  {
    search: "game console handheld",
    class: "fas",
    icon: "game-console-handheld",
  },
  { search: "video games gamepad hardware", class: "fas", icon: "gamepad" },
  {
    search: "video games gamepad alt hardware",
    class: "fas",
    icon: "gamepad-alt",
  },
  {
    search: "video games joystick hardware",
    class: "fas",
    icon: "joystick",
  },
  { search: "video games brand discord", class: "fab", icon: "discord" },
  {
    search: "video games brand playstation",
    class: "fab",
    icon: "playstation",
  },
  {
    search: "video games brand steam",
    class: "fab",
    icon: "steam",
  },
  { search: "video games brand xbox", class: "fab", icon: "xbox" },

  { search: "video games ghost", class: "fas", icon: "ghost" },
  {
    search: "video games alien monster",
    class: "fas",
    icon: "alien-monster",
  },
  { search: "video games portal enter", class: "fad", icon: "portal-enter" },
  {
    search: "video games portal exit",
    class: "fad",
    icon: "portal-exit",
  },

  { search: "laptop hardware", class: "fas", icon: "laptop" },
  { search: "desktop hardware", class: "fas", icon: "desktop" },
  { search: "head vr", class: "fas", icon: "head-vr" },
  { search: "mouse hardware", class: "fas", icon: "mouse" },
  { search: "database hardware", class: "fas", icon: "database" },
  {
    search: "cloud download alt",
    class: "fad",
    icon: "cloud-download-alt",
  },

  { search: "headphones", class: "fas", icon: "headphones" },
  { search: "headphones alt", class: "fas", icon: "headphones-alt" },
  { search: "user headset", class: "fas", icon: "user-headset" },
  { search: "headset", class: "fas", icon: "headset" },
  { search: "microphone", class: "fas", icon: "microphone" },
  { search: "webcam", class: "fas", icon: "webcam" },

  { search: "camera movie film media", class: "fas", icon: "camera-movie" },
  { search: "film movie media", class: "fas", icon: "film" },
  { search: "popcorn", class: "fas", icon: "popcorn" },
  { search: "tv", class: "fas", icon: "tv" },

  { search: "book", class: "fas", icon: "book" },
  { search: "bookmark", class: "fas", icon: "bookmark" },

  { search: "chess board games", class: "fas", icon: "chess" },
  {
    search: "chess bishop board games",
    class: "fas",
    icon: "chess-bishop",
  },
  {
    search: "chess knight board games",
    class: "fas",
    icon: "chess-knight",
  },

  { search: "dice board games", class: "fas", icon: "dice" },
  { search: "dice d20 dnd board games", class: "fas", icon: "dice-d20" },
  { search: "dungeon dnd board games", class: "fas", icon: "dungeon" },
  {
    search: "axe battle dnd board games",
    class: "fas",
    icon: "axe-battle",
  },
  { search: "bow arrow dnd board games", class: "fas", icon: "bow-arrow" },
  { search: "bomb dnd board games", class: "fas", icon: "bomb" },
  { search: "hat wizard", class: "fas", icon: "hat-wizard" },
  { search: "scroll", class: "fas", icon: "scroll" },
  { search: "staff", class: "fas", icon: "staff" },
  { search: "sword", class: "fas", icon: "sword" },

  { search: "music", class: "fas", icon: "music" },
  { search: "music alt", class: "fas", icon: "music-alt" },
  { search: "music compact disc", class: "fas", icon: "compact-disc" },
  { search: "music cowbell", class: "fas", icon: "cowbell" },
  { search: "music guitar", class: "fas", icon: "guitar" },
  {
    search: "music guitar electric",
    class: "fas",
    icon: "guitar-electric",
  },
  { search: "music piano keyboard", class: "fas", icon: "piano-keyboard" },
  { search: "music saxophone", class: "fas", icon: "saxophone" },
  { search: "music violin", class: "fas", icon: "violin" },

  { search: "route", class: "fas", icon: "route" },
  { search: "map marked", class: "fas", icon: "map-marked" },
  { search: "globe africa", class: "fas", icon: "globe-africa" },
  { search: "globe americas", class: "fas", icon: "globe-americas" },
  { search: "globe asia", class: "fas", icon: "globe-asia" },
  { search: "globe europe", class: "fas", icon: "globe-europe" },

  { search: "atom alt", class: "fas", icon: "atom-alt" },
  { search: "robot", class: "fas", icon: "robot" },
  { search: "biohazard", class: "fas", icon: "biohazard" },

  { search: "space outerspace meteor", class: "fas", icon: "meteor" },
  { search: "space outerspace rocket", class: "fas", icon: "rocket" },
  {
    search: "space outerspace starfighter",
    class: "fas",
    icon: "starfighter",
  },
  {
    search: "space outerspace starfighter alt",
    class: "fas",
    icon: "starfighter-alt",
  },
  { search: "space outerspace starship", class: "fas", icon: "starship" },
  {
    search: "space outerspace starship freighter",
    class: "fas",
    icon: "starship-freighter",
  },

  { search: "food apple alt", class: "fas", icon: "apple-alt" },
  { search: "food bacon", class: "fas", icon: "bacon" },
  { search: "food burger soda", class: "fas", icon: "burger-soda" },
  { search: "food candy cane", class: "fas", icon: "candy-cane" },
  { search: "food cheeseburger", class: "fas", icon: "cheeseburger" },
  { search: "food cheese swiss", class: "fas", icon: "cheese-swiss" },
  { search: "food egg fried", class: "fas", icon: "egg-fried" },
  { search: "food fish", class: "fas", icon: "fish" },
  { search: "food lemon", class: "fas", icon: "lemon" },
  { search: "food pepperHot", class: "fas", icon: "pepper-hot" },
  { search: "food pie", class: "fas", icon: "pie" },
  { search: "food pizza", class: "fas", icon: "pizza" },
  { search: "food pizza slice", class: "fas", icon: "pizza-slice" },
  { search: "food pumpkin", class: "fas", icon: "pumpkin" },
  { search: "food salad", class: "fas", icon: "salad" },
  { search: "food sandwich", class: "fas", icon: "sandwich" },
  { search: "food sausage", class: "fas", icon: "sausage" },
  { search: "food soup", class: "fas", icon: "soup" },
  { search: "food taco", class: "fas", icon: "taco" },
  { search: "food turkey", class: "fas", icon: "turkey" },
  { search: "food utensils alt", class: "fas", icon: "utensils-alt" },

  { search: "drink coffee", class: "fas", icon: "coffee" },
  { search: "drink coffee togo", class: "fas", icon: "coffee-togo" },
  { search: "drink glass cheers", class: "fas", icon: "glass-cheers" },
  { search: "drink cocktail", class: "fas", icon: "cocktail" },
  {
    search: "drink glass whiskey rocks",
    class: "fas",
    icon: "glass-whiskey-rocks",
  },
  { search: "drink wine glass alt", class: "fas", icon: "wine-glass-alt" },

  { search: "sports exercise baseball", class: "fas", icon: "baseball" },
  { search: "sports exercise biking", class: "fas", icon: "biking" },
  {
    search: "sports exercise bowling ball",
    class: "fas",
    icon: "bowling-ball",
  },
  {
    search: "sports exercise boxing glove",
    class: "fas",
    icon: "boxing-glove",
  },
  { search: "sports exercise cricket", class: "fas", icon: "cricket" },
  { search: "sports exercise curling", class: "fas", icon: "curling" },
  { search: "sports exercise dumbbell", class: "fas", icon: "dumbbell" },
  {
    search: "sports exercise field hockey",
    class: "fas",
    icon: "field-hockey",
  },
  {
    search: "sports exercise football ball",
    class: "fas",
    icon: "football-ball",
  },
  {
    search: "sports exercise football helmet",
    class: "fas",
    icon: "football-helmet",
  },
  { search: "sports exercise futbol", class: "fas", icon: "futbol" },
  { search: "sports exercise golf ball", class: "fas", icon: "golf-ball" },
  {
    search: "sports exercise hockey sticks",
    class: "fas",
    icon: "hockey-sticks",
  },
  { search: "sports exercise pennant", class: "fas", icon: "pennant" },
  { search: "sports exercise quidditch", class: "fas", icon: "quidditch" },
  { search: "sports exercise racquet", class: "fas", icon: "racquet" },
  { search: "sports exercise running", class: "fas", icon: "running" },
  {
    search: "sports exercise shuttlecock",
    class: "fas",
    icon: "shuttlecock",
  },
  { search: "sports exercise skating", class: "fas", icon: "skating" },
  { search: "sports exercise skiing", class: "fas", icon: "skiing" },
  {
    search: "sports exercise snowboarding",
    class: "fas",
    icon: "snowboarding",
  },
  { search: "sports exercise swimmer", class: "fas", icon: "swimmer" },
  {
    search: "sports exercise table tennis",
    class: "fas",
    icon: "table-tennis",
  },
  {
    search: "sports exercise tennis ball",
    class: "fas",
    icon: "tennis-ball",
  },
  {
    search: "sports exercise volleyball ball",
    class: "fas",
    icon: "volleyball-ball",
  },
  { search: "sports exercise walking", class: "fas", icon: "walking" },

  { search: "misc paw", class: "fas", icon: "paw" },
  { search: "misc heart", class: "fas", icon: "heart" },
  { search: "misc star", class: "fas", icon: "star" },
  { search: "misc gem", class: "fad", icon: "gem" },
  { search: "misc trophy", class: "fas", icon: "trophy" },
  { search: "misc icons", class: "fad", icon: "icons" },
  { search: "misc image", class: "fad", icon: "image" },
  { search: "misc arrow down", class: "fas", icon: "arrow-down" },
  { search: "misc arrow up", class: "fas", icon: "arrow-up" },
  { search: "misc check", class: "fas", icon: "check" },
  { search: "misc question", class: "fas", icon: "question" },

  { search: "emoji surprise", class: "fas", icon: "surprise" },
  { search: "emoji dizzy", class: "fas", icon: "dizzy" },
  { search: "emoji grin", class: "fas", icon: "grin" },
  {
    search: "emoji grin squint tears",
    class: "fas",
    icon: "grin-squint-tears",
  },
  { search: "emoji grin stars", class: "fas", icon: "grin-stars" },
  { search: "emoji grin tears", class: "fas", icon: "grin-tears" },
  { search: "emoji grin tongue", class: "fas", icon: "grin-tongue" },
  { search: "emoji grimace", class: "fas", icon: "grimace" },
  {
    search: "emoji grin tongue squint",
    class: "fas",
    icon: "grin-tongue-squint",
  },
  {
    search: "emoji grin tongue wink",
    class: "fas",
    icon: "grin-tongue-wink",
  },
  { search: "emoji grin wink", class: "fas", icon: "grin-wink" },
  { search: "emoji laugh", class: "fas", icon: "laugh" },
  { search: "emoji laugh beam", class: "fas", icon: "laugh-beam" },
  { search: "emoji laugh squint", class: "fas", icon: "laugh-squint" },
  { search: "emoji meh", class: "fas", icon: "meh" },
  {
    search: "emoji meh rolling eyes",
    class: "fas",
    icon: "meh-rolling-eyes",
  },
  { search: "emoji sad cry", class: "fas", icon: "sad-cry" },
  { search: "emoji smile beam", class: "fas", icon: "smile-beam" },
  { search: "emoji smile wink", class: "fas", icon: "smile-wink" },
];
const search = ref("");
const searchIcons = computed(() => {
  const searchTerm = search.value.toLowerCase().split(" ");
  console.log(searchTerm);
  return icons.filter((icon) => {
    for (let term of searchTerm) {
      if (search.value === "") {
        return true;
      } else if (icon.search.includes(term) && term !== "") {
        return true;
      }
    }
  });
});
const clearSearch = () => {
  search.value = "";
};

const setIcon = (icon) => {
  store.dispatch("updateCurrentIcon", icon);
};
</script>
<style lang="scss" scoped>
.icons-selector {
  @include flexbox();
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: min-content;
  width: 100%;
  .search-bar {
    @include flexbox();
    margin: 0;
    padding: 0;
    position: relative;
    width: 80%;
    .search {
      border: 1px solid #d7d7d7;
      border-radius: 30px;
      font-size: 1em;
      outline: none;
      padding: 0.5em 1em;
      margin: 0.5em 0;
      width: 100%;
    }

    .clear-button {
      position: absolute;
      height: 1em;
      width: 1em;
      right: 0.5em;
      top: 50%;
      margin-top: -8px;

      svg {
        color: #666666;
        font-size: 1em;
      }
    }
  }

  .list-wrapper {
    @include flexbox();
    align-items: flex-start;
    justify-content: center;
    overflow: scroll;
    height: 10em;
    width: 100%;

    ul {
      @include flexbox();
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      list-style: none;
      flex-wrap: wrap;
      margin: 0.5em;
      padding: 0;
      width: 100%;

      li {
        opacity: 0.7;
        margin: 0.5em;
        width: 2.5em;
        @include transition(all 0.3s ease);

        svg {
          font-size: 1.5em;
        }
      }

      li:hover {
        @include transform(scale(1.2));
        opacity: 1;
      }
    }
  }
}
</style>
