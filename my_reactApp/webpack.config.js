const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point for the application
  entry: "./src/main.js", // Change to main.jsx if you're using that as the entry point

  // Output configuration
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Automatically clean the output folder before each build
  },

  // Mode (development, production, or none)
  mode: "development", // Change to 'production' for production builds

  // Module rules (loaders)
  module: {
    rules: [
      // Babel loader for JSX and modern JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // CSS loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // File loader for images and assets
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets",
            },
          },
        ],
      },
    ],
  },

  // Resolve file extensions
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Source HTML file
    }),
  ],

  // DevServer configuration (for development)
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000, // Change the port if needed
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
};
