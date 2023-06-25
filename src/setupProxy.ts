import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app: any) => {
  // app.use(
  //   createProxyMiddleware("/interview.mock.data/payload.json", {
  //     target: "https://s3.eu-west-2.amazonaws.com",
  //     changeOrigin: true,
  //   })
  // );
};

// https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json
