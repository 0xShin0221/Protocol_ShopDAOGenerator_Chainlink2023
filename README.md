## Deployed Contract

WIP

## Architecture based Smart Contracts

```
C4Context
      title Smart Contract Client Usecase
      Boundary(b0, "Shop DAO generator") {

        Person(customerC, "BrandDAOMember", "the DAO member who has a profitRightNFT")
        Person(customerB, "BrandManeger","Brand using Shopify EC")



        System(SystemAA, "ShopDAO dApp", "Frontend app.From this app, brand managers can operate.Shopify setup, DAO proposals, etc.")

        Boundary(b1, "SmartContract") {
          Boundary(b2, "DAO Factory Group") {

            System(SystemE, "DAO Factory Contract", "Based on Openzeppelin")
            System_Ext(SystemA, "GovernanceToken")
						System_Ext(SystemB, "Governor")
            System_Ext(SystemC, "Timelock")
          }


          Boundary(b3, "VotingNFT group") {　
            SystemQueue(SystemF, "ProfitRightNFTFactory", "")
						SystemQueue_Ext(SystemH, "Season 2 Item Selection NFT", "NFT entitled to vote on the proposal")
						SystemQueue_Ext(SystemG, "Season 1 Item Selection NFT", "NFT entitled to vote on the proposal")
          }

					Boundary(b4, "Chainlink Function") {　
						System(SystemI,"ShopifyItemRegister","Shopify Integration")

					}

					System(SystemM,"ShopifySaleRegister","Shopify Integration")
        }

      }

      Boundary(c1,"ShopifyAPI"){
          System(SystemJ,"[POST] ShopifyADMINAPI", "https://${shop_name}.myshopify.com/admin/api/2022-10/products.json")
					SystemQueue_Ext(SystemK,"[WEBHOOK] ShopifyADMINAPI", "https://${shop_name}.myshopify.com/admin/api/2023-01/webhooks.json <br /> {`topic`: `orders/create } `")
	    }

      Boundary(d1,"ShopifyEC"){
          SystemQueue_Ext(SystemL,"Items", "")

	    }

      Boundary(e1,"BackendAPI functions on Vercel"){
          SystemQueue_Ext(SystemN,"Some endpoint of APIs", "")

	    }

			Person(customerA, "GeneralUser","Can buy items of the brand")




      Rel(customerB, SystemAA, "0.Create DAO ShopifyStore <br /> 1. CreateDAO <br /> 2. CreateProposal for next selling item")
      Rel(customerC, SystemAA, "3.Vote for NextSeasonItem <br /> Purchace profitRightNFT")
      Rel(SystemAA, SystemE, "1. CreateDAO")
      Rel(SystemAA, SystemB, "2. CreateProposal <br /> 2-a.call productPropose() with target contract of ShopifyItemRegister")
      Rel(SystemC, SystemF, "If Success, mint the new id of profitRightNFT")
      Rel(SystemE, SystemA,"")
			Rel(SystemE, SystemB,"")
			Rel(SystemE, SystemC, "")
      Rel(SystemF, SystemG, "2-a. Create NFT")
			Rel(SystemB,SystemI,"2-b. As Target contract of productPropose()")
      Rel(SystemI,SystemJ,"[POST] regist item <br />with <br />SHOPIFY_ADMIN_API_ACCESS_TOKEN and SHOP_NAME and details as args")

      Rel(SystemJ, SystemL,"getItems")
      Rel(SystemL,SystemK,"onEvent() when a product is sold (a function of the API provided by Shopify)")
      Rel(customerA, SystemL,"Buy Items")
      Rel(SystemK,SystemN,"Called at the time of purchase")
			Rel(SystemN,SystemM,"")
　　　 Rel(SystemM,customerC,"Return of Profits by Claim")



      UpdateElementStyle(customerA, $fontColor="blue", $bgColor="white", $borderColor="blue")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemB,SystemF,$textColor="blue", $lineColor="blue",$offsetY="-170"$offsetX="-50")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemJ, $textColor="blue", $lineColor="blue", $offsetY="830")
      UpdateRelStyle(SystemB,SystemI,$textColor="blue", $lineColor="blue",$offsetY="-270"$offsetX="300")
      UpdateRelStyle(SystemI, SystemJ, $textColor="blue", $lineColor="blue", $offsetX="-270",$offsetY="-40")
      UpdateRelStyle(CustomerA, SystemL, $textColor="blue", $lineColor="blue", $offsetY="0")
      UpdateRelStyle(customerC, SystemG, $offsetY="0",$offsetX="-250")
      UpdateRelStyle(SystemM,SystemK,  $textColor="red", $lineColor="red", $offsetX="-350" $offsetY="-1100")
      UpdateRelStyle(SystemM,customerC,$textColor="red", $lineColor="red", $offsetY="80",$offsetX="30")
      UpdateRelStyle(SystemAA, SystemB, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```
