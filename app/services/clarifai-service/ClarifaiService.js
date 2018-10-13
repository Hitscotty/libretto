import Clarifai from "clarifai";
import ClarifaiConfig from "../../config/clarifai.config";

module.exports = new Clarifai.App({
  apiKey: ClarifaiConfig.key
});
