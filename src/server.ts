import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
// import { stringify, parse } from 'querystring';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Endpoint GET /filteredimage?image_url={{URL}}
  // to filter an image from a public url
  app.get("/filteredimage",  async (req, res) => {
    let img_url: string = req.query.image_url.toString();
    // validate the image_url query
    if(!img_url) {
      // respond with an error if no url is provided
      return res.status(400).send('Error: no url provided.');
    }
    // call filterImageFromURL(image_url) to filter the image
    const filteredpath = await filterImageFromURL(img_url);
    // send the resulting file in the response
    res.sendFile(filteredpath);
    // delete any files on the server on finish of the response
    res.on('finish', () => deleteLocalFiles([filteredpath]));
  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();