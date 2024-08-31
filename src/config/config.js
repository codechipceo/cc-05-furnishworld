const activeEnviroment = "prod"

// backend path configuration
const localServer = "http://localhost:5000/";
const liveServer = "https://api.furnishworld.in/"
// const testServer = import.meta.env.VITE_TEST_SERVER;
const backendUrlObj = {
  local: localServer,
  //   test: testServer,
  prod: liveServer,
};

const backendUrl = backendUrlObj[activeEnviroment];

export { activeEnviroment, backendUrl };
