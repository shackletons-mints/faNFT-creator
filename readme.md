# Fan_NFT

*I reorganized the file structure. Below I put some useful links as well as my login info for a threejs course*

## TODO
* Export Function
  * Get all fan props
  * Assemble props into a fan
  * Package so it can be shipped
  * Should we package props as objects and assign a rarity?
    {
      design: handle1,
      rarity: an int from 1-100?
    }
  * Metadata (decide on which we want to use, need to research compatibility of the two options)
    * [openseas metadata-api](https://github.com/ProjectOpenSea/metadata-api-nodejs)
    * opensea format
      {
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
        "external_url": "https://openseacreatures.io/3", (i.e. a landing page)
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", (i.e. image url)
        "name": "Dave Starbelly",
        "attributes": [
          {
            "trait_type": "Base",
            "value": "Starfish"
          },
          {
            "trait_type": "Eyes",
            "value": "Big"
          },
        ],
      }
    * [enjin metadata-github 'deeds'](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)
    * enjin format
      {
        "title": "Asset Metadata",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Identifies the asset to which this NFT represents"
          },
          "description": {
            "type": "string",
            "description": "Describes the asset to which this NFT represents"
          },
          "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
            }
        }
      }


* Setup Hardhat/Truffle/Openzepplin (leaning towards hardhat per the eth website)
  * Step 8: https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/

* Test on Ropsten Test Network (maybe do this with some dummy nft's)

* Create more designs for handle/leaf

* Handle Adjustments
  * It's too think
  * Add a Tastle?
  * Add an inner section?
  * Add a section on top, thinner than the base

* Leaf Adjustments
  * Experiment with making the body empty
  * Make the skeleton (wireframe) less prominent

* Ideas
  * Leaf shape could be cool to implement
  * Make backgrounds interact with handle reflection/refraction
  * Play with lights
    * Ambient light may be too bright
    * Add another directional light to highlight fan more


## useful links
###### textures
**useful articles**
* https://discoverthreejs.com/book/first-steps/textures-intro/
* https://threejsfundamentals.org/threejs/lessons/threejs-textures.html
*download ue version*

**downloadable textures**
* https://freepbr.com/c/wood/
* https://github.com/mrdoob/three.js/tree/dev/examples/textures

*this course is great, if the threejs docs don't help, this is my go-to*

**THREEjs Course, feel free to use my info to login**
* https://threejs-journey.com/
  * email: bcaliva21@gmail.com
  * password: D!CKSd1cksdicks
