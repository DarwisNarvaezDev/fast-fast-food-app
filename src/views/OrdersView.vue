<template>
  <section class="dashboardContainer">
    <div class="dashboardPanel">
      <div class="dashboardMain">
        <div class="dataWrapper">
          <div class="ordersQueued">
            <div class="headerDiv">
              <h1>Orders Queue</h1>
            </div>
            <div class="queue">
              <ul>
                <li
                  class="animate__animated animate__flash"
                  v-for="order in ordersQueue"
                  :key="order.id"
                >
                  00{{ order.id }} - {{ order.customer_name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="ordersReady">
            <div class="topDiv">
              <h1>Ready for pick-up!</h1>
            </div>
            <div class="ordersReadyList">
              <ul v-if="showReady">
                <li
                  class="animate__animated animate__flash"
                  v-for="element in ordersReady"
                  :key="element.id"
                >
                  00{{ element.id }} - {{ element.customer_name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { API_URI, API_LIST_ORDERS_MAPPING } from "../helpers/Constants";

export default {
  data() {
    return {
      ordersQueue: [],
      ordersReady: [],
      showReady: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        const request = await fetch(API_URI + API_LIST_ORDERS_MAPPING);
        const response = await request.json();
        const newOrders = response.filter((element) => {
          return element.order_status === "1";
        });
        if (newOrders.length > 0) {
          this.ordersQueue = newOrders;
        } else {
          this.ordersQueue = [];
        }
        const ordersDone = response.filter((element) => {
          return element.order_status === "2";
        });
        if (ordersDone.length > 0) {
          this.showReady = true;
          this.ordersReady = ordersDone;
        } else {
          this.showReady = false;
          this.ordersReady = [];
        }
      } catch (error) {
        this.ordersQueue = [];
        this.ordersReady = [];
        console.warn(error);
      }
    },
  },
  async beforeMount() {
    this.fetchData();
  },
  mounted() {
    setInterval(() => {
      this.fetchData();
    }, 5000);
  },
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Thasadith:wght@700&display=swap");

.dashboardContainer {
  @include prepareMainContainer;
  font-family: "Thasadith", sans-serif;
}

.dashboardPanel {
  @include prepareCentralPanel;
}

.dashboardMain {
  @include prepareApp(whitesmoke);
}

.dataWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.ordersQueued {
  width: 40%;
  height: 100%;
  background-color: black;
  border-radius: 15px 0 0 15px;
  color: white;
}

.headerDiv {
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  border-bottom: 1px solid white;
  font-size: 40px;
}

.queue {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    font-size: 50px;

    li {
      margin: 2rem;
    }
  }
}

.ordersReady {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.topDiv {
  width: 100%;
  height: 20%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ordersReadyList {
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 50px;

  ul {
    li {
      margin: 2rem;
    }
  }
}
</style>
