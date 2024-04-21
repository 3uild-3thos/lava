const auction_house = {
  "version": "1.4.1",
  "name": "auction_house",
  "instructions": [
    {
      "name": "withdrawFromFee",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "feeWithdrawalDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFromTreasury",
      "accounts": [
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treasuryWithdrawalDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateAuctionHouse",
      "accounts": [
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeWithdrawalDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryWithdrawalDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryWithdrawalDestinationOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sellerFeeBasisPoints",
          "type": {
            "option": "u16"
          }
        },
        {
          "name": "requiresSignOff",
          "type": {
            "option": "bool"
          }
        },
        {
          "name": "canChangeSalePrice",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "createAuctionHouse",
      "accounts": [
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeWithdrawalDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryWithdrawalDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryWithdrawalDestinationOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "feePayerBump",
          "type": "u8"
        },
        {
          "name": "treasuryBump",
          "type": "u8"
        },
        {
          "name": "sellerFeeBasisPoints",
          "type": "u16"
        },
        {
          "name": "requiresSignOff",
          "type": "bool"
        },
        {
          "name": "canChangeSalePrice",
          "type": "bool"
        }
      ]
    },
    {
      "name": "buy",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeStateBump",
          "type": "u8"
        },
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerBuy",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeStateBump",
          "type": "u8"
        },
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "publicBuy",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeStateBump",
          "type": "u8"
        },
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerPublicBuy",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeStateBump",
          "type": "u8"
        },
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancel",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerCancel",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerDeposit",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "executeSale",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerPaymentReceiptAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerReceiptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "freeTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "freeTradeStateBump",
          "type": "u8"
        },
        {
          "name": "programAsSignerBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "executePartialSale",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerPaymentReceiptAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerReceiptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "freeTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "freeTradeStateBump",
          "type": "u8"
        },
        {
          "name": "programAsSignerBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        },
        {
          "name": "partialOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "partialOrderPrice",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "auctioneerExecuteSale",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerPaymentReceiptAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerReceiptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "freeTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "freeTradeStateBump",
          "type": "u8"
        },
        {
          "name": "programAsSignerBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerExecutePartialSale",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerPaymentReceiptAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerReceiptTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouseTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "freeTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "freeTradeStateBump",
          "type": "u8"
        },
        {
          "name": "programAsSignerBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        },
        {
          "name": "partialOrderSize",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "partialOrderPrice",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "sell",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "freeSellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeStateBump",
          "type": "u8"
        },
        {
          "name": "freeTradeStateBump",
          "type": "u8"
        },
        {
          "name": "programAsSignerBump",
          "type": "u8"
        },
        {
          "name": "buyerPrice",
          "type": "u64"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerSell",
      "accounts": [
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "freeSellerTradeState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAsSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tradeStateBump",
          "type": "u8"
        },
        {
          "name": "freeTradeStateBump",
          "type": "u8"
        },
        {
          "name": "programAsSignerBump",
          "type": "u8"
        },
        {
          "name": "tokenSize",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiptAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "auctioneerWithdraw",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiptAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionHouseFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeEscrowAccount",
      "accounts": [
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "escrowPaymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionHouse",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "escrowPaymentBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "delegateAuctioneer",
      "accounts": [
        {
          "name": "auctionHouse",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "scopes",
          "type": {
            "vec": {
              "defined": "AuthorityScope"
            }
          }
        }
      ]
    },
    {
      "name": "updateAuctioneer",
      "accounts": [
        {
          "name": "auctionHouse",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auctioneerAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ahAuctioneerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "scopes",
          "type": {
            "vec": {
              "defined": "AuthorityScope"
            }
          }
        }
      ]
    },
    {
      "name": "printListingReceipt",
      "accounts": [
        {
          "name": "receipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bookkeeper",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "receiptBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "cancelListingReceipt",
      "accounts": [
        {
          "name": "receipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "printBidReceipt",
      "accounts": [
        {
          "name": "receipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bookkeeper",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "receiptBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "cancelBidReceipt",
      "accounts": [
        {
          "name": "receipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "printPurchaseReceipt",
      "accounts": [
        {
          "name": "purchaseReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidReceipt",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bookkeeper",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "purchaseReceiptBump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "BidReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeState",
            "type": "publicKey"
          },
          {
            "name": "bookkeeper",
            "type": "publicKey"
          },
          {
            "name": "auctionHouse",
            "type": "publicKey"
          },
          {
            "name": "buyer",
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "purchaseReceipt",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "tokenSize",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tradeStateBump",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "canceledAt",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "ListingReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tradeState",
            "type": "publicKey"
          },
          {
            "name": "bookkeeper",
            "type": "publicKey"
          },
          {
            "name": "auctionHouse",
            "type": "publicKey"
          },
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "purchaseReceipt",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "tokenSize",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tradeStateBump",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "canceledAt",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "PurchaseReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bookkeeper",
            "type": "publicKey"
          },
          {
            "name": "buyer",
            "type": "publicKey"
          },
          {
            "name": "seller",
            "type": "publicKey"
          },
          {
            "name": "auctionHouse",
            "type": "publicKey"
          },
          {
            "name": "metadata",
            "type": "publicKey"
          },
          {
            "name": "tokenSize",
            "type": "u64"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "AuctionHouse",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auctionHouseFeeAccount",
            "type": "publicKey"
          },
          {
            "name": "auctionHouseTreasury",
            "type": "publicKey"
          },
          {
            "name": "treasuryWithdrawalDestination",
            "type": "publicKey"
          },
          {
            "name": "feeWithdrawalDestination",
            "type": "publicKey"
          },
          {
            "name": "treasuryMint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "treasuryBump",
            "type": "u8"
          },
          {
            "name": "feePayerBump",
            "type": "u8"
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "requiresSignOff",
            "type": "bool"
          },
          {
            "name": "canChangeSalePrice",
            "type": "bool"
          },
          {
            "name": "escrowPaymentBump",
            "type": "u8"
          },
          {
            "name": "hasAuctioneer",
            "type": "bool"
          },
          {
            "name": "auctioneerAddress",
            "type": "publicKey"
          },
          {
            "name": "scopes",
            "type": {
              "array": [
                "bool",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Auctioneer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auctioneerAuthority",
            "type": "publicKey"
          },
          {
            "name": "auctionHouse",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AuthorityScope",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Deposit"
          },
          {
            "name": "Buy"
          },
          {
            "name": "PublicBuy"
          },
          {
            "name": "ExecuteSale"
          },
          {
            "name": "Sell"
          },
          {
            "name": "Cancel"
          },
          {
            "name": "Withdraw"
          }
        ]
      }
    },
    {
      "name": "BidType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "PublicSale"
          },
          {
            "name": "PrivateSale"
          },
          {
            "name": "AuctioneerPublicSale"
          },
          {
            "name": "AuctioneerPrivateSale"
          }
        ]
      }
    },
    {
      "name": "ListingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Sell"
          },
          {
            "name": "AuctioneerSell"
          }
        ]
      }
    },
    {
      "name": "PurchaseType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ExecuteSale"
          },
          {
            "name": "AuctioneerExecuteSale"
          }
        ]
      }
    },
    {
      "name": "CancelType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Cancel"
          },
          {
            "name": "AuctioneerCancel"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PublicKeyMismatch",
      "msg": "PublicKeyMismatch"
    },
    {
      "code": 6001,
      "name": "InvalidMintAuthority",
      "msg": "InvalidMintAuthority"
    },
    {
      "code": 6002,
      "name": "UninitializedAccount",
      "msg": "UninitializedAccount"
    },
    {
      "code": 6003,
      "name": "IncorrectOwner",
      "msg": "IncorrectOwner"
    },
    {
      "code": 6004,
      "name": "PublicKeysShouldBeUnique",
      "msg": "PublicKeysShouldBeUnique"
    },
    {
      "code": 6005,
      "name": "StatementFalse",
      "msg": "StatementFalse"
    },
    {
      "code": 6006,
      "name": "NotRentExempt",
      "msg": "NotRentExempt"
    },
    {
      "code": 6007,
      "name": "NumericalOverflow",
      "msg": "NumericalOverflow"
    },
    {
      "code": 6008,
      "name": "ExpectedSolAccount",
      "msg": "Expected a sol account but got an spl token account instead"
    },
    {
      "code": 6009,
      "name": "CannotExchangeSOLForSol",
      "msg": "Cannot exchange sol for sol"
    },
    {
      "code": 6010,
      "name": "SOLWalletMustSign",
      "msg": "If paying with sol, sol wallet must be signer"
    },
    {
      "code": 6011,
      "name": "CannotTakeThisActionWithoutAuctionHouseSignOff",
      "msg": "Cannot take this action without auction house signing too"
    },
    {
      "code": 6012,
      "name": "NoPayerPresent",
      "msg": "No payer present on this txn"
    },
    {
      "code": 6013,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid"
    },
    {
      "code": 6014,
      "name": "MetadataDoesntExist",
      "msg": "Metadata doesn't exist"
    },
    {
      "code": 6015,
      "name": "InvalidTokenAmount",
      "msg": "Invalid token amount"
    },
    {
      "code": 6016,
      "name": "BothPartiesNeedToAgreeToSale",
      "msg": "Both parties need to agree to this sale"
    },
    {
      "code": 6017,
      "name": "CannotMatchFreeSalesWithoutAuctionHouseOrSellerSignoff",
      "msg": "Cannot match free sales unless the auction house or seller signs off"
    },
    {
      "code": 6018,
      "name": "SaleRequiresSigner",
      "msg": "This sale requires a signer"
    },
    {
      "code": 6019,
      "name": "OldSellerNotInitialized",
      "msg": "Old seller not initialized"
    },
    {
      "code": 6020,
      "name": "SellerATACannotHaveDelegate",
      "msg": "Seller ata cannot have a delegate set"
    },
    {
      "code": 6021,
      "name": "BuyerATACannotHaveDelegate",
      "msg": "Buyer ata cannot have a delegate set"
    },
    {
      "code": 6022,
      "name": "NoValidSignerPresent",
      "msg": "No valid signer present"
    },
    {
      "code": 6023,
      "name": "InvalidBasisPoints",
      "msg": "BP must be less than or equal to 10000"
    },
    {
      "code": 6024,
      "name": "TradeStateDoesntExist",
      "msg": "The trade state account does not exist"
    },
    {
      "code": 6025,
      "name": "TradeStateIsNotEmpty",
      "msg": "The trade state is not empty"
    },
    {
      "code": 6026,
      "name": "ReceiptIsEmpty",
      "msg": "The receipt is empty"
    },
    {
      "code": 6027,
      "name": "InstructionMismatch",
      "msg": "The instruction does not match"
    },
    {
      "code": 6028,
      "name": "InvalidAuctioneer",
      "msg": "Invalid Auctioneer for this Auction House instance."
    },
    {
      "code": 6029,
      "name": "MissingAuctioneerScope",
      "msg": "The Auctioneer does not have the correct scope for this action."
    },
    {
      "code": 6030,
      "name": "MustUseAuctioneerHandler",
      "msg": "Must use auctioneer handler."
    },
    {
      "code": 6031,
      "name": "NoAuctioneerProgramSet",
      "msg": "No Auctioneer program set."
    },
    {
      "code": 6032,
      "name": "TooManyScopes",
      "msg": "Too many scopes."
    },
    {
      "code": 6033,
      "name": "AuctionHouseNotDelegated",
      "msg": "Auction House not delegated."
    },
    {
      "code": 6034,
      "name": "BumpSeedNotInHashMap",
      "msg": "Bump seed not in hash map."
    },
    {
      "code": 6035,
      "name": "EscrowUnderRentExemption",
      "msg": "The instruction would drain the escrow below rent exemption threshold"
    },
    {
      "code": 6036,
      "name": "InvalidSeedsOrAuctionHouseNotDelegated",
      "msg": "Invalid seeds or Auction House not delegated"
    },
    {
      "code": 6037,
      "name": "BuyerTradeStateNotValid",
      "msg": "The buyer trade state was unable to be initialized."
    },
    {
      "code": 6038,
      "name": "MissingElementForPartialOrder",
      "msg": "Partial order size and price must both be provided in a partial buy."
    },
    {
      "code": 6039,
      "name": "NotEnoughTokensAvailableForPurchase",
      "msg": "Amount of tokens available for purchase is less than the partial order amount."
    },
    {
      "code": 6040,
      "name": "PartialPriceMismatch",
      "msg": "Calculated partial price does not not partial price that was provided."
    },
    {
      "code": 6041,
      "name": "AuctionHouseAlreadyDelegated",
      "msg": "Auction House already delegated."
    },
    {
      "code": 6042,
      "name": "AuctioneerAuthorityMismatch",
      "msg": "Auctioneer Authority Mismatch"
    },
    {
      "code": 6043,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds in escrow account to purchase."
    }
  ],
    "metadata": {
    "address": "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"
  }
}

const bubblegum = {
  "version": "0.12.0",
  "name": "bubblegum",
  "instructions": [
    {
      "name": "burn",
      "docs": [
        "Burns a leaf node from the tree."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "cancelRedeem",
      "docs": [
        "Cancels a redeem."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "voucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "compress",
      "docs": [
        "Compresses a metadata account."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createTree",
      "docs": [
        "Creates a new tree."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "treeCreator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxDepth",
          "type": "u32"
        },
        {
          "name": "maxBufferSize",
          "type": "u32"
        },
        {
          "name": "public",
          "type": {
            "option": "bool"
          }
        }
      ]
    },
    {
      "name": "decompressV1",
      "docs": [
        "Decompresses a leaf node from the tree."
      ],
      "accounts": [
        {
          "name": "voucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sysvarRent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadata",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ]
    },
    {
      "name": "delegate",
      "docs": [
        "Sets a delegate for a leaf node."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "previousLeafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newLeafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "mintToCollectionV1",
      "docs": [
        "Mints a new asset and adds it to a collection."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treeDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionAuthorityRecordPda",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "If there is no collecton authority record PDA then",
            "this must be the Bubblegum program address."
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "editionAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "metadataArgs",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ],
      "returns": {
        "defined": "LeafSchema"
      }
    },
    {
      "name": "mintV1",
      "docs": [
        "Mints a new asset."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treeDelegate",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "message",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ],
      "returns": {
        "defined": "LeafSchema"
      }
    },
    {
      "name": "redeem",
      "docs": [
        "Redeems a vouches.",
        "",
        "Once a vouch is redeemed, the corresponding leaf node is removed from the tree."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "voucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setAndVerifyCollection",
      "docs": [
        "Sets and verifies a collection to a leaf node"
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treeDelegate",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "This account is checked to be a signer in",
            "the case of `set_and_verify_collection` where",
            "we are actually changing the NFT metadata."
          ]
        },
        {
          "name": "collectionAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionAuthorityRecordPda",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "If there is no collecton authority record PDA then",
            "this must be the Bubblegum program address."
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "editionAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "message",
          "type": {
            "defined": "MetadataArgs"
          }
        },
        {
          "name": "collection",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setDecompressableState",
      "docs": [
        "Sets the `decompressible_state` of a tree."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeCreator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "decompressableState",
          "type": {
            "defined": "DecompressibleState"
          }
        }
      ]
    },
    {
      "name": "setDecompressibleState",
      "docs": [
        "Sets the `decompressible_state` of a tree."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeCreator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "decompressableState",
          "type": {
            "defined": "DecompressibleState"
          }
        }
      ]
    },
    {
      "name": "setTreeDelegate",
      "docs": [
        "Sets a delegate for a tree."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treeCreator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newTreeDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "transfer",
      "docs": [
        "Transfers a leaf node from one account to another."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newLeafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "unverifyCollection",
      "docs": [
        "Unverifies a collection from a leaf node."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treeDelegate",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "This account is checked to be a signer in",
            "the case of `set_and_verify_collection` where",
            "we are actually changing the NFT metadata."
          ]
        },
        {
          "name": "collectionAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionAuthorityRecordPda",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "If there is no collecton authority record PDA then",
            "this must be the Bubblegum program address."
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "editionAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "message",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ]
    },
    {
      "name": "unverifyCreator",
      "docs": [
        "Unverifies a creator from a leaf node."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "message",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ]
    },
    {
      "name": "verifyCollection",
      "docs": [
        "Verifies a collection for a leaf node."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "treeDelegate",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "This account is checked to be a signer in",
            "the case of `set_and_verify_collection` where",
            "we are actually changing the NFT metadata."
          ]
        },
        {
          "name": "collectionAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionAuthorityRecordPda",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "If there is no collecton authority record PDA then",
            "this must be the Bubblegum program address."
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "editionAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bubblegumSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "message",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ]
    },
    {
      "name": "verifyCreator",
      "docs": [
        "Verifies a creator for a leaf node."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "dataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "creatorHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "message",
          "type": {
            "defined": "MetadataArgs"
          }
        }
      ]
    },
    {
      "name": "updateMetadata",
      "docs": [
        "Updates metadata for a leaf node that is not part of a verified collection."
      ],
      "accounts": [
        {
          "name": "treeAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Either collection authority or tree owner/delegate, depending",
            "on whether the item is in a verified collection"
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Used when item is in a verified collection"
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Used when item is in a verified collection"
          ]
        },
        {
          "name": "collectionAuthorityRecordPda",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "leafOwner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "leafDelegate",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logWrapper",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "compressionProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "nonce",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "currentMetadata",
          "type": {
            "defined": "MetadataArgs"
          }
        },
        {
          "name": "updateArgs",
          "type": {
            "defined": "UpdateArgs"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "TreeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treeCreator",
            "type": "publicKey"
          },
          {
            "name": "treeDelegate",
            "type": "publicKey"
          },
          {
            "name": "totalMintCapacity",
            "type": "u64"
          },
          {
            "name": "numMinted",
            "type": "u64"
          },
          {
            "name": "isPublic",
            "type": "bool"
          },
          {
            "name": "isDecompressible",
            "type": {
              "defined": "DecompressibleState"
            }
          }
        ]
      }
    },
    {
      "name": "Voucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leafSchema",
            "type": {
              "defined": "LeafSchema"
            }
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "merkleTree",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Creator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "share",
            "docs": [
              "The percentage share.",
              "",
              "The value is a percentage, not basis points."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Uses",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "useMethod",
            "type": {
              "defined": "UseMethod"
            }
          },
          {
            "name": "remaining",
            "type": "u64"
          },
          {
            "name": "total",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Collection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "key",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "MetadataArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "The name of the asset"
            ],
            "type": "string"
          },
          {
            "name": "symbol",
            "docs": [
              "The symbol for the asset"
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "URI pointing to JSON representing the asset"
            ],
            "type": "string"
          },
          {
            "name": "sellerFeeBasisPoints",
            "docs": [
              "Royalty basis points that goes to creators in secondary sales (0-10000)"
            ],
            "type": "u16"
          },
          {
            "name": "primarySaleHappened",
            "type": "bool"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "editionNonce",
            "docs": [
              "nonce for easy calculation of editions, if present"
            ],
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "tokenStandard",
            "docs": [
              "Since we cannot easily change Metadata, we add the new DataV2 fields here at the end."
            ],
            "type": {
              "option": {
                "defined": "TokenStandard"
              }
            }
          },
          {
            "name": "collection",
            "docs": [
              "Collection"
            ],
            "type": {
              "option": {
                "defined": "Collection"
              }
            }
          },
          {
            "name": "uses",
            "docs": [
              "Uses"
            ],
            "type": {
              "option": {
                "defined": "Uses"
              }
            }
          },
          {
            "name": "tokenProgramVersion",
            "type": {
              "defined": "TokenProgramVersion"
            }
          },
          {
            "name": "creators",
            "type": {
              "vec": {
                "defined": "Creator"
              }
            }
          }
        ]
      }
    },
    {
      "name": "UpdateArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "symbol",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "uri",
            "type": {
              "option": "string"
            }
          },
          {
            "name": "creators",
            "type": {
              "option": {
                "vec": {
                  "defined": "Creator"
                }
              }
            }
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": {
              "option": "u16"
            }
          },
          {
            "name": "primarySaleHappened",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "isMutable",
            "type": {
              "option": "bool"
            }
          }
        ]
      }
    },
    {
      "name": "Version",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V1"
          }
        ]
      }
    },
    {
      "name": "LeafSchema",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V1",
            "fields": [
              {
                "name": "id",
                "type": "publicKey"
              },
              {
                "name": "owner",
                "type": "publicKey"
              },
              {
                "name": "delegate",
                "type": "publicKey"
              },
              {
                "name": "nonce",
                "type": "u64"
              },
              {
                "name": "data_hash",
                "type": {
                  "array": [
                    "u8",
                    32
                  ]
                }
              },
              {
                "name": "creator_hash",
                "type": {
                  "array": [
                    "u8",
                    32
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      "name": "TokenProgramVersion",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Original"
          },
          {
            "name": "Token2022"
          }
        ]
      }
    },
    {
      "name": "TokenStandard",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NonFungible"
          },
          {
            "name": "FungibleAsset"
          },
          {
            "name": "Fungible"
          },
          {
            "name": "NonFungibleEdition"
          }
        ]
      }
    },
    {
      "name": "UseMethod",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Burn"
          },
          {
            "name": "Multiple"
          },
          {
            "name": "Single"
          }
        ]
      }
    },
    {
      "name": "BubblegumEventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "LeafSchemaEvent"
          }
        ]
      }
    },
    {
      "name": "DecompressibleState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Enabled"
          },
          {
            "name": "Disabled"
          }
        ]
      }
    },
    {
      "name": "InstructionName",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Unknown"
          },
          {
            "name": "MintV1"
          },
          {
            "name": "Redeem"
          },
          {
            "name": "CancelRedeem"
          },
          {
            "name": "Transfer"
          },
          {
            "name": "Delegate"
          },
          {
            "name": "DecompressV1"
          },
          {
            "name": "Compress"
          },
          {
            "name": "Burn"
          },
          {
            "name": "CreateTree"
          },
          {
            "name": "VerifyCreator"
          },
          {
            "name": "UnverifyCreator"
          },
          {
            "name": "VerifyCollection"
          },
          {
            "name": "UnverifyCollection"
          },
          {
            "name": "SetAndVerifyCollection"
          },
          {
            "name": "MintToCollectionV1"
          },
          {
            "name": "SetDecompressibleState"
          },
          {
            "name": "UpdateMetadata"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AssetOwnerMismatch",
      "msg": "Asset Owner Does not match"
    },
    {
      "code": 6001,
      "name": "PublicKeyMismatch",
      "msg": "PublicKeyMismatch"
    },
    {
      "code": 6002,
      "name": "HashingMismatch",
      "msg": "Hashing Mismatch Within Leaf Schema"
    },
    {
      "code": 6003,
      "name": "UnsupportedSchemaVersion",
      "msg": "Unsupported Schema Version"
    },
    {
      "code": 6004,
      "name": "CreatorShareTotalMustBe100",
      "msg": "Creator shares must sum to 100"
    },
    {
      "code": 6005,
      "name": "DuplicateCreatorAddress",
      "msg": "No duplicate creator addresses in metadata"
    },
    {
      "code": 6006,
      "name": "CreatorDidNotVerify",
      "msg": "Creator did not verify the metadata"
    },
    {
      "code": 6007,
      "name": "CreatorNotFound",
      "msg": "Creator not found in creator Vec"
    },
    {
      "code": 6008,
      "name": "NoCreatorsPresent",
      "msg": "No creators in creator Vec"
    },
    {
      "code": 6009,
      "name": "CreatorHashMismatch",
      "msg": "User-provided creator Vec must result in same user-provided creator hash"
    },
    {
      "code": 6010,
      "name": "DataHashMismatch",
      "msg": "User-provided metadata must result in same user-provided data hash"
    },
    {
      "code": 6011,
      "name": "CreatorsTooLong",
      "msg": "Creators list too long"
    },
    {
      "code": 6012,
      "name": "MetadataNameTooLong",
      "msg": "Name in metadata is too long"
    },
    {
      "code": 6013,
      "name": "MetadataSymbolTooLong",
      "msg": "Symbol in metadata is too long"
    },
    {
      "code": 6014,
      "name": "MetadataUriTooLong",
      "msg": "Uri in metadata is too long"
    },
    {
      "code": 6015,
      "name": "MetadataBasisPointsTooHigh",
      "msg": "Basis points in metadata cannot exceed 10000"
    },
    {
      "code": 6016,
      "name": "TreeAuthorityIncorrect",
      "msg": "Tree creator or tree delegate must sign."
    },
    {
      "code": 6017,
      "name": "InsufficientMintCapacity",
      "msg": "Not enough unapproved mints left"
    },
    {
      "code": 6018,
      "name": "NumericalOverflowError",
      "msg": "NumericalOverflowError"
    },
    {
      "code": 6019,
      "name": "IncorrectOwner",
      "msg": "Incorrect account owner"
    },
    {
      "code": 6020,
      "name": "CollectionCannotBeVerifiedInThisInstruction",
      "msg": "Cannot Verify Collection in this Instruction"
    },
    {
      "code": 6021,
      "name": "CollectionNotFound",
      "msg": "Collection Not Found on Metadata"
    },
    {
      "code": 6022,
      "name": "AlreadyVerified",
      "msg": "Collection item is already verified."
    },
    {
      "code": 6023,
      "name": "AlreadyUnverified",
      "msg": "Collection item is already unverified."
    },
    {
      "code": 6024,
      "name": "UpdateAuthorityIncorrect",
      "msg": "Incorrect leaf metadata update authority."
    },
    {
      "code": 6025,
      "name": "LeafAuthorityMustSign",
      "msg": "This transaction must be signed by either the leaf owner or leaf delegate"
    },
    {
      "code": 6026,
      "name": "CollectionMustBeSized",
      "msg": "Collection Not Compatable with Compression, Must be Sized"
    },
    {
      "code": 6027,
      "name": "MetadataMintMismatch",
      "msg": "Metadata mint does not match collection mint"
    },
    {
      "code": 6028,
      "name": "InvalidCollectionAuthority",
      "msg": "Invalid collection authority"
    },
    {
      "code": 6029,
      "name": "InvalidDelegateRecord",
      "msg": "Invalid delegate record pda derivation"
    },
    {
      "code": 6030,
      "name": "CollectionMasterEditionAccountInvalid",
      "msg": "Edition account doesnt match collection"
    },
    {
      "code": 6031,
      "name": "CollectionMustBeAUniqueMasterEdition",
      "msg": "Collection Must Be a Unique Master Edition v2"
    },
    {
      "code": 6032,
      "name": "UnknownExternalError",
      "msg": "Could not convert external error to BubblegumError"
    },
    {
      "code": 6033,
      "name": "DecompressionDisabled",
      "msg": "Decompression is disabled for this tree."
    },
    {
      "code": 6034,
      "name": "MissingCollectionMintAccount",
      "msg": "Missing collection mint account"
    },
    {
      "code": 6035,
      "name": "MissingCollectionMetadataAccount",
      "msg": "Missing collection metadata account"
    },
    {
      "code": 6036,
      "name": "CollectionMismatch",
      "msg": "Collection mismatch"
    },
    {
      "code": 6037,
      "name": "MetadataImmutable",
      "msg": "Metadata not mutable"
    },
    {
      "code": 6038,
      "name": "PrimarySaleCanOnlyBeFlippedToTrue",
      "msg": "Can only update primary sale to true"
    },
    {
      "code": 6039,
      "name": "CreatorDidNotUnverify",
      "msg": "Creator did not unverify the metadata"
    },
    {
      "code": 6040,
      "name": "InvalidTokenStandard",
      "msg": "Only NonFungible standard is supported"
    }
  ],
  "metadata": {
    "address": "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY",
    "origin": "anchor",
    "binaryVersion": "0.27.0",
    "libVersion": "0.28.0"
  }
}

const spl_account_compression = {
  "version": "0.1.4",
  "name": "spl_account_compression",
  "instructions": [
    {
      "name": "initEmptyMerkleTree",
      "docs": [
        "Creates a new merkle tree with maximum leaf capacity of `power(2, max_depth)`",
        "and a minimum concurrency limit of `max_buffer_size`.",
        "",
        "Concurrency limit represents the # of replace instructions that can be successfully",
        "executed with proofs dated for the same root. For example, a maximum buffer size of 1024",
        "means that a minimum of 1024 replaces can be executed before a new proof must be",
        "generated for the next replace instruction.",
        "",
        "Concurrency limit should be determined by empirically testing the demand for",
        "state built on top of SPL Compression.",
        "",
        "For instructions on enabling the canopy, see [canopy]."
      ],
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority that controls write-access to the tree",
            "Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs."
          ]
        },
        {
          "name": "noop",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Program used to emit changelogs as cpi instruction data."
          ]
        }
      ],
      "args": [
        {
          "name": "maxDepth",
          "type": "u32"
        },
        {
          "name": "maxBufferSize",
          "type": "u32"
        }
      ]
    },
    {
      "name": "replaceLeaf",
      "docs": [
        "Note:",
        "Supporting this instruction open a security vulnerability for indexers.",
        "This instruction has been deemed unusable for publicly indexed compressed NFTs.",
        "Indexing batched data in this way requires indexers to read in the `uri`s onto physical storage",
        "and then into their database. This opens up a DOS attack vector, whereby this instruction is",
        "repeatedly invoked, causing indexers to fail.",
        "",
        "Because this instruction was deemed insecure, this instruction has been removed",
        "until secure usage is available on-chain.",
        "Executes an instruction that overwrites a leaf node.",
        "Composing programs should check that the data hashed into previous_leaf",
        "matches the authority information necessary to execute this instruction."
      ],
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority that controls write-access to the tree",
            "Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs."
          ]
        },
        {
          "name": "noop",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Program used to emit changelogs as cpi instruction data."
          ]
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "previousLeaf",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "newLeaf",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "transferAuthority",
      "docs": [
        "Transfers `authority`.",
        "Requires `authority` to sign"
      ],
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority that controls write-access to the tree",
            "Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs."
          ]
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "verifyLeaf",
      "docs": [
        "Verifies a provided proof and leaf.",
        "If invalid, throws an error."
      ],
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "leaf",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "append",
      "docs": [
        "This instruction allows the tree's `authority` to append a new leaf to the tree",
        "without having to supply a proof.",
        "",
        "Learn more about SPL",
        "ConcurrentMerkleTree",
        "[here](https://github.com/solana-labs/solana-program-library/tree/master/libraries/concurrent-merkle-tree)"
      ],
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority that controls write-access to the tree",
            "Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs."
          ]
        },
        {
          "name": "noop",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Program used to emit changelogs as cpi instruction data."
          ]
        }
      ],
      "args": [
        {
          "name": "leaf",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "insertOrAppend",
      "docs": [
        "This instruction takes a proof, and will attempt to write the given leaf",
        "to the specified index in the tree. If the insert operation fails, the leaf will be `append`-ed",
        "to the tree.",
        "It is up to the indexer to parse the final location of the leaf from the emitted changelog."
      ],
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority that controls write-access to the tree",
            "Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs."
          ]
        },
        {
          "name": "noop",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Program used to emit changelogs as cpi instruction data."
          ]
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "leaf",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "index",
          "type": "u32"
        }
      ]
    },
    {
      "name": "closeEmptyTree",
      "accounts": [
        {
          "name": "merkleTree",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority that controls write-access to the tree"
          ]
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "types": [
    {
      "name": "ApplicationDataEventV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "applicationData",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "ChangeLogEventV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "docs": [
              "Public key of the ConcurrentMerkleTree"
            ],
            "type": "publicKey"
          },
          {
            "name": "path",
            "docs": [
              "Nodes of off-chain merkle tree needed by indexer"
            ],
            "type": {
              "vec": {
                "defined": "PathNode"
              }
            }
          },
          {
            "name": "seq",
            "docs": [
              "Index corresponding to the number of successful operations on this tree.",
              "Used by the off-chain indexer to figure out when there are gaps to be backfilled."
            ],
            "type": "u64"
          },
          {
            "name": "index",
            "docs": [
              "Bitmap of node parity (used when hashing)"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "ConcurrentMerkleTreeHeader",
      "docs": [
        "Initialization parameters for an SPL ConcurrentMerkleTree.",
        "",
        "Only the following permutations are valid:",
        "",
        "| max_depth | max_buffer_size       |",
        "| --------- | --------------------- |",
        "| 14        | (64, 256, 1024, 2048) |",
        "| 20        | (64, 256, 1024, 2048) |",
        "| 24        | (64, 256, 512, 1024, 2048) |",
        "| 26        | (64, 256, 512, 1024, 2048) |",
        "| 30        | (512, 1024, 2048) |",
        ""
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "accountType",
            "docs": [
              "Account type"
            ],
            "type": {
              "defined": "CompressionAccountType"
            }
          },
          {
            "name": "header",
            "docs": [
              "Versioned header"
            ],
            "type": {
              "defined": "ConcurrentMerkleTreeHeaderData"
            }
          }
        ]
      }
    },
    {
      "name": "ConcurrentMerkleTreeHeaderDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxBufferSize",
            "docs": [
              "Buffer of changelogs stored on-chain.",
              "Must be a power of 2; see above table for valid combinations."
            ],
            "type": "u32"
          },
          {
            "name": "maxDepth",
            "docs": [
              "Depth of the SPL ConcurrentMerkleTree to store.",
              "Tree capacity can be calculated as power(2, max_depth).",
              "See above table for valid options."
            ],
            "type": "u32"
          },
          {
            "name": "authority",
            "docs": [
              "Authority that validates the content of the trees.",
              "Typically a program, e.g., the Bubblegum contract validates that leaves are valid NFTs."
            ],
            "type": "publicKey"
          },
          {
            "name": "creationSlot",
            "docs": [
              "Slot corresponding to when the Merkle tree was created.",
              "Provides a lower-bound on what slot to start (re-)building a tree from."
            ],
            "type": "u64"
          },
          {
            "name": "padding",
            "docs": [
              "Needs padding for the account to be 8-byte aligned",
              "8-byte alignment is necessary to zero-copy the SPL ConcurrentMerkleTree"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "PathNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "node",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "ApplicationDataEvent",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V1",
            "fields": [
              {
                "defined": "ApplicationDataEventV1"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "ChangeLogEvent",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V1",
            "fields": [
              {
                "defined": "ChangeLogEventV1"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "AccountCompressionEvent",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ChangeLog",
            "fields": [
              {
                "defined": "ChangeLogEvent"
              }
            ]
          },
          {
            "name": "ApplicationData",
            "fields": [
              {
                "defined": "ApplicationDataEvent"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "CompressionAccountType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "ConcurrentMerkleTree"
          }
        ]
      }
    },
    {
      "name": "ConcurrentMerkleTreeHeaderData",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V1",
            "fields": [
              {
                "defined": "ConcurrentMerkleTreeHeaderDataV1"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectLeafLength",
      "msg": "Incorrect leaf length. Expected vec of 32 bytes"
    },
    {
      "code": 6001,
      "name": "ConcurrentMerkleTreeError",
      "msg": "Concurrent merkle tree error"
    },
    {
      "code": 6002,
      "name": "ZeroCopyError",
      "msg": "Issue zero copying concurrent merkle tree data"
    },
    {
      "code": 6003,
      "name": "ConcurrentMerkleTreeConstantsError",
      "msg": "An unsupported max depth or max buffer size constant was provided"
    },
    {
      "code": 6004,
      "name": "CanopyLengthMismatch",
      "msg": "Expected a different byte length for the merkle tree canopy"
    },
    {
      "code": 6005,
      "name": "IncorrectAuthority",
      "msg": "Provided authority does not match expected tree authority"
    },
    {
      "code": 6006,
      "name": "IncorrectAccountOwner",
      "msg": "Account is owned by a different program, expected it to be owned by this program"
    },
    {
      "code": 6007,
      "name": "IncorrectAccountType",
      "msg": "Account provided has incorrect account type"
    },
    {
      "code": 6008,
      "name": "LeafIndexOutOfBounds",
      "msg": "Leaf index of concurrent merkle tree is out of bounds"
    }
  ],
  "metadata": {
    "address": "cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK",
    "origin": "anchor",
    "binaryVersion": "0.25.0",
    "libVersion": "0.25.0"
  }
}

const spl_noop = {
  "version": "0.1.3",
  "name": "spl_noop",
  "instructions": [
    {
      "name": "noopInstruction",
      "args": [
        {
          "name": "data",
          "type": "bytes"
        }
      ]
    }
  ],
  "metadata": {
    "address": "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV",
    "origin": "shank"
  }
}

const candy_guard = {
  "version": "3.0.0",
  "name": "candy_guard",
  "instructions": [
    {
      "name": "initialize",
      "docs": [
        "Create a new candy guard account."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "mint",
      "docs": [
        "Mint an NFT from a candy machine wrapped in the candy guard."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineAuthorityPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMintAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recentSlothashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "mintArgs",
          "type": "bytes"
        },
        {
          "name": "label",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "mintV2",
      "docs": [
        "Mint an NFT from a candy machine wrapped in the candy guard."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Candy Guard account."
          ]
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Candy Machine program account.",
            ""
          ]
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine account."
          ]
        },
        {
          "name": "candyMachineAuthorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine authority account.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer for the mint (SOL) fees."
          ]
        },
        {
          "name": "minter",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Minter account for validation and non-SOL fees."
          ]
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Mint account of the NFT. The account will be initialized if necessary.",
            "",
            "Must be a signer if:",
            "* the nft_mint account does not exist.",
            ""
          ]
        },
        {
          "name": "nftMintAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Mint authority of the NFT before the authority gets transfer to the master edition account.",
            "",
            "If nft_mint account exists:",
            "* it must match the mint authority of nft_mint."
          ]
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the NFT. This account must be uninitialized.",
            ""
          ]
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Master edition account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "token",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Destination token account (required for pNFT).",
            ""
          ]
        },
        {
          "name": "tokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token record (required for pNFT).",
            ""
          ]
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Collection authority or metadata delegate record.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master edition account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Update authority of the collection NFT.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "splTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program."
          ]
        },
        {
          "name": "splAtaProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "SPL Associated Token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "recentSlothashes",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SlotHashes sysvar cluster data.",
            ""
          ]
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization Rules program.",
            ""
          ]
        },
        {
          "name": "authorizationRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization rules account for the collection metadata (if any).",
            ""
          ]
        }
      ],
      "args": [
        {
          "name": "mintArgs",
          "type": "bytes"
        },
        {
          "name": "label",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "route",
      "docs": [
        "Route the transaction to a guard instruction."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "RouteArgs"
          }
        },
        {
          "name": "label",
          "type": {
            "option": "string"
          }
        }
      ]
    },
    {
      "name": "setAuthority",
      "docs": [
        "Set a new authority of the candy guard."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "unwrap",
      "docs": [
        "Remove a candy guard from a candy machine, setting the authority to the",
        "candy guard authority."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "update",
      "docs": [
        "Update the candy guard configuration."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "Withdraw the rent SOL from the candy guard account."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "wrap",
      "docs": [
        "Add a candy guard to a candy machine. After the guard is added, mint",
        "is only allowed through the candy guard."
      ],
      "accounts": [
        {
          "name": "candyGuard",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachineAuthority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "FreezeEscrow",
      "docs": [
        "PDA to store the frozen funds."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "candyGuard",
            "docs": [
              "Candy guard address associated with this escrow."
            ],
            "type": "publicKey"
          },
          {
            "name": "candyMachine",
            "docs": [
              "Candy machine address associated with this escrow."
            ],
            "type": "publicKey"
          },
          {
            "name": "frozenCount",
            "docs": [
              "Number of NFTs frozen."
            ],
            "type": "u64"
          },
          {
            "name": "firstMintTime",
            "docs": [
              "The timestamp of the first (frozen) mint. This is used to calculate",
              "when the freeze period is over."
            ],
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "freezePeriod",
            "docs": [
              "The amount of time (in seconds) for the freeze. The NFTs will be",
              "allowed to thaw after this."
            ],
            "type": "i64"
          },
          {
            "name": "destination",
            "docs": [
              "The destination address for the frozen fund to go to."
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "The authority that initialized the freeze. This will be the only",
              "address able to unlock the funds in case the candy guard account is",
              "closed."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "CandyGuard",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AddressGate",
      "docs": [
        "Guard that restricts access to a specific address."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "Allocation",
      "docs": [
        "Gaurd to specify the maximum number of mints in a guard set.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Allocation tracker PDA. The PDA is derived",
        "using the seed `[\"allocation\", allocation id,",
        "candy guard pubkey, candy machine pubkey]`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "docs": [
              "Unique identifier of the allocation."
            ],
            "type": "u8"
          },
          {
            "name": "limit",
            "docs": [
              "The limit of the allocation."
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "AllocationTracker",
      "docs": [
        "PDA to track the number of mints."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "AllowList",
      "docs": [
        "Guard that uses a merkle tree to specify the addresses allowed to mint.",
        "",
        "List of accounts required:",
        "",
        "0. `[]` Pda created by the merkle proof instruction (seeds `[\"allow_list\", merke tree root,",
        "payer key, candy guard pubkey, candy machine pubkey]`)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "merkleRoot",
            "docs": [
              "Merkle root of the addresses allowed to mint."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "AllowListProof",
      "docs": [
        "PDA to track whether an address has been validated or not."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "BotTax",
      "docs": [
        "Guard is used to:",
        "* charge a penalty for invalid transactions",
        "* validate that the mint transaction is the last transaction",
        "* verify that only authorized programs have instructions",
        "",
        "The `bot_tax` is applied to any error that occurs during the",
        "validation of the guards."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "lastInstruction",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "EndDate",
      "docs": [
        "Guard that sets a specific date for the mint to stop."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "date",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "FreezeSolPayment",
      "docs": [
        "Guard that charges an amount in SOL (lamports) for the mint with a freeze period.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Freeze PDA to receive the funds (seeds `[\"freeze_escrow\",",
        "destination pubkey, candy guard pubkey, candy machine pubkey]`).",
        "1. `[]` Associate token account of the NFT (seeds `[payer pubkey, token",
        "program pubkey, nft mint pubkey]`).",
        "2. `[optional]` Authorization rule set for the minted pNFT."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "FreezeTokenPayment",
      "docs": [
        "Guard that charges an amount in a specified spl-token as payment for the mint with a freeze period.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Freeze PDA to receive the funds (seeds `[\"freeze_escrow\",",
        "destination_ata pubkey, candy guard pubkey, candy machine pubkey]`).",
        "1. `[]` Associate token account of the NFT (seeds `[payer pubkey, token",
        "program pubkey, nft mint pubkey]`).",
        "2. `[writable]` Token account holding the required amount.",
        "3. `[writable]` Associate token account of the Freeze PDA (seeds `[freeze PDA",
        "pubkey, token program pubkey, nft mint pubkey]`).",
        "4. `[optional]` Authorization rule set for the minted pNFT."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "destinationAta",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "Gatekeeper",
      "docs": [
        "Guard that validates if the payer of the transaction has a token from a specified",
        "gateway network — in most cases, a token after completing a captcha challenge.",
        "",
        "List of accounts required:",
        "",
        "0. `[writeable]` Gatekeeper token account.",
        "1. `[]` Gatekeeper program account.",
        "2. `[]` Gatekeeper expire account."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gatekeeperNetwork",
            "docs": [
              "The network for the gateway token required"
            ],
            "type": "publicKey"
          },
          {
            "name": "expireOnUse",
            "docs": [
              "Whether or not the token should expire after minting.",
              "The gatekeeper network must support this if true."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "MintLimit",
      "docs": [
        "Gaurd to set a limit of mints per wallet.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Mint counter PDA. The PDA is derived",
        "using the seed `[\"mint_limit\", mint guard id, payer key,",
        "candy guard pubkey, candy machine pubkey]`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "docs": [
              "Unique identifier of the mint limit."
            ],
            "type": "u8"
          },
          {
            "name": "limit",
            "docs": [
              "Limit of mints per individual address."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "MintCounter",
      "docs": [
        "PDA to track the number of mints for an individual address."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "NftBurn",
      "docs": [
        "Guard that requires another NFT (token) from a specific collection to be burned.",
        "",
        "List of accounts required:",
        "",
        "0. `[writeable]` Token account of the NFT.",
        "1. `[writeable]` Metadata account of the NFT.",
        "2. `[writeable]` Master Edition account of the NFT.",
        "3. `[writeable]` Mint account of the NFT.",
        "4. `[writeable]` Collection metadata account of the NFT.",
        "5. `[writeable]` Token Record of the NFT (pNFT)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "requiredCollection",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "NftGate",
      "docs": [
        "Guard that restricts the transaction to holders of a specified collection.",
        "",
        "List of accounts required:",
        "",
        "0. `[]` Token account of the NFT.",
        "1. `[]` Metadata account of the NFT."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "requiredCollection",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "NftPayment",
      "docs": [
        "Guard that charges another NFT (token) from a specific collection as payment",
        "for the mint.",
        "",
        "List of accounts required:",
        "",
        "0. `[writeable]` Token account of the NFT.",
        "1. `[writeable]` Metadata account of the NFT.",
        "2. `[]` Mint account of the NFT.",
        "3. `[]` Account to receive the NFT.",
        "4. `[writeable]` Destination PDA key (seeds [destination pubkey, token program id, nft mint pubkey]).",
        "5. `[]` spl-associate-token program ID.",
        "6. `[]` Master edition (pNFT)",
        "7. `[writable]` Owner token record (pNFT)",
        "8. `[writable]` Destination token record (pNFT)",
        "9. `[]` Token Authorization Rules program (pNFT)",
        "10. `[]` Token Authorization Rules account (pNFT)"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "requiredCollection",
            "type": "publicKey"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ProgramGate",
      "docs": [
        "Guard that restricts the programs that can be in a mint transaction. The guard allows the",
        "necessary programs for the mint and any other program specified in the configuration."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "additional",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "RedeemedAmount",
      "docs": [
        "Guard that stop the mint once the specified amount of items",
        "redeenmed is reached."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maximum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "SolPayment",
      "docs": [
        "Guard that charges an amount in SOL (lamports) for the mint.",
        "",
        "List of accounts required:",
        "",
        "0. `[]` Account to receive the funds."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "destination",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "StartDate",
      "docs": [
        "Guard that sets a specific start date for the mint."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "date",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "ThirdPartySigner",
      "docs": [
        "Guard that requires a specified signer to validate the transaction.",
        "",
        "List of accounts required:",
        "",
        "0. `[signer]` Signer of the transaction."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "signerKey",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "Token2022Payment",
      "docs": [
        "Guard that charges an amount in a specified spl-token as payment for the mint.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Token account holding the required amount.",
        "1. `[writable]` Address of the ATA to receive the tokens.",
        "2. `[]` Mint account.",
        "3. `[]` SPL Token-2022 program account."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "destinationAta",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "TokenBurn",
      "docs": [
        "Guard that requires addresses that hold an amount of a specified spl-token",
        "and burns them.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Token account holding the required amount.",
        "1. `[writable]` Token mint account."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "TokenGate",
      "docs": [
        "Guard that restricts access to addresses that hold the specified spl-token.",
        "",
        "List of accounts required:",
        "",
        "0. `[]` Token account holding the required amount."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "TokenPayment",
      "docs": [
        "Guard that charges an amount in a specified spl-token as payment for the mint.",
        "",
        "List of accounts required:",
        "",
        "0. `[writable]` Token account holding the required amount.",
        "1. `[writable]` Address of the ATA to receive the tokens."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "destinationAta",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "RouteArgs",
      "docs": [
        "Arguments for a route transaction."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "guard",
            "docs": [
              "The target guard type."
            ],
            "type": {
              "defined": "GuardType"
            }
          },
          {
            "name": "data",
            "docs": [
              "Arguments for the guard instruction."
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "CandyGuardData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "default",
            "type": {
              "defined": "GuardSet"
            }
          },
          {
            "name": "groups",
            "type": {
              "option": {
                "vec": {
                  "defined": "Group"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "Group",
      "docs": [
        "A group represent a specific set of guards. When groups are used, transactions",
        "must specify which group should be used during validation."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "label",
            "type": "string"
          },
          {
            "name": "guards",
            "type": {
              "defined": "GuardSet"
            }
          }
        ]
      }
    },
    {
      "name": "GuardSet",
      "docs": [
        "The set of guards available."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "botTax",
            "docs": [
              "Last instruction check and bot tax (penalty for invalid transactions)."
            ],
            "type": {
              "option": {
                "defined": "BotTax"
              }
            }
          },
          {
            "name": "solPayment",
            "docs": [
              "Sol payment guard (set the price for the mint in lamports)."
            ],
            "type": {
              "option": {
                "defined": "SolPayment"
              }
            }
          },
          {
            "name": "tokenPayment",
            "docs": [
              "Token payment guard (set the price for the mint in spl-token amount)."
            ],
            "type": {
              "option": {
                "defined": "TokenPayment"
              }
            }
          },
          {
            "name": "startDate",
            "docs": [
              "Start data guard (controls when minting is allowed)."
            ],
            "type": {
              "option": {
                "defined": "StartDate"
              }
            }
          },
          {
            "name": "thirdPartySigner",
            "docs": [
              "Third party signer guard (requires an extra signer for the transaction)."
            ],
            "type": {
              "option": {
                "defined": "ThirdPartySigner"
              }
            }
          },
          {
            "name": "tokenGate",
            "docs": [
              "Token gate guard (restrict access to holders of a specific token)."
            ],
            "type": {
              "option": {
                "defined": "TokenGate"
              }
            }
          },
          {
            "name": "gatekeeper",
            "docs": [
              "Gatekeeper guard (captcha challenge)."
            ],
            "type": {
              "option": {
                "defined": "Gatekeeper"
              }
            }
          },
          {
            "name": "endDate",
            "docs": [
              "End date guard (set an end date to stop the mint)."
            ],
            "type": {
              "option": {
                "defined": "EndDate"
              }
            }
          },
          {
            "name": "allowList",
            "docs": [
              "Allow list guard (curated list of allowed addresses)."
            ],
            "type": {
              "option": {
                "defined": "AllowList"
              }
            }
          },
          {
            "name": "mintLimit",
            "docs": [
              "Mint limit guard (add a limit on the number of mints per wallet)."
            ],
            "type": {
              "option": {
                "defined": "MintLimit"
              }
            }
          },
          {
            "name": "nftPayment",
            "docs": [
              "NFT Payment (charge an NFT in order to mint)."
            ],
            "type": {
              "option": {
                "defined": "NftPayment"
              }
            }
          },
          {
            "name": "redeemedAmount",
            "docs": [
              "Redeemed amount guard (add a limit on the overall number of items minted)."
            ],
            "type": {
              "option": {
                "defined": "RedeemedAmount"
              }
            }
          },
          {
            "name": "addressGate",
            "docs": [
              "Address gate (check access against a specified address)."
            ],
            "type": {
              "option": {
                "defined": "AddressGate"
              }
            }
          },
          {
            "name": "nftGate",
            "docs": [
              "NFT gate guard (check access based on holding a specified NFT)."
            ],
            "type": {
              "option": {
                "defined": "NftGate"
              }
            }
          },
          {
            "name": "nftBurn",
            "docs": [
              "NFT burn guard (burn a specified NFT)."
            ],
            "type": {
              "option": {
                "defined": "NftBurn"
              }
            }
          },
          {
            "name": "tokenBurn",
            "docs": [
              "Token burn guard (burn a specified amount of spl-token)."
            ],
            "type": {
              "option": {
                "defined": "TokenBurn"
              }
            }
          },
          {
            "name": "freezeSolPayment",
            "docs": [
              "Freeze sol payment guard (set the price for the mint in lamports with a freeze period)."
            ],
            "type": {
              "option": {
                "defined": "FreezeSolPayment"
              }
            }
          },
          {
            "name": "freezeTokenPayment",
            "docs": [
              "Freeze token payment guard (set the price for the mint in spl-token amount with a freeze period)."
            ],
            "type": {
              "option": {
                "defined": "FreezeTokenPayment"
              }
            }
          },
          {
            "name": "programGate",
            "docs": [
              "Program gate guard (restricts the programs that can be in a mint transaction)."
            ],
            "type": {
              "option": {
                "defined": "ProgramGate"
              }
            }
          },
          {
            "name": "allocation",
            "docs": [
              "Allocation guard (specify the maximum number of mints in a group)."
            ],
            "type": {
              "option": {
                "defined": "Allocation"
              }
            }
          },
          {
            "name": "token2022Payment",
            "docs": [
              "Token2022 payment guard (set the price for the mint in spl-token-2022 amount)."
            ],
            "type": {
              "option": {
                "defined": "Token2022Payment"
              }
            }
          }
        ]
      }
    },
    {
      "name": "FreezeInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Initialize"
          },
          {
            "name": "Thaw"
          },
          {
            "name": "UnlockFunds"
          }
        ]
      }
    },
    {
      "name": "GuardType",
      "docs": [
        "Available guard types."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "BotTax"
          },
          {
            "name": "SolPayment"
          },
          {
            "name": "TokenPayment"
          },
          {
            "name": "StartDate"
          },
          {
            "name": "ThirdPartySigner"
          },
          {
            "name": "TokenGate"
          },
          {
            "name": "Gatekeeper"
          },
          {
            "name": "EndDate"
          },
          {
            "name": "AllowList"
          },
          {
            "name": "MintLimit"
          },
          {
            "name": "NftPayment"
          },
          {
            "name": "RedeemedAmount"
          },
          {
            "name": "AddressGate"
          },
          {
            "name": "NftGate"
          },
          {
            "name": "NftBurn"
          },
          {
            "name": "TokenBurn"
          },
          {
            "name": "FreezeSolPayment"
          },
          {
            "name": "FreezeTokenPayment"
          },
          {
            "name": "ProgramGate"
          },
          {
            "name": "Allocation"
          },
          {
            "name": "Token2022Payment"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAccountSize",
      "msg": "Could not save guard to account"
    },
    {
      "code": 6001,
      "name": "DeserializationError",
      "msg": "Could not deserialize guard"
    },
    {
      "code": 6002,
      "name": "PublicKeyMismatch",
      "msg": "Public key mismatch"
    },
    {
      "code": 6003,
      "name": "DataIncrementLimitExceeded",
      "msg": "Exceeded account increase limit"
    },
    {
      "code": 6004,
      "name": "IncorrectOwner",
      "msg": "Account does not have correct owner"
    },
    {
      "code": 6005,
      "name": "Uninitialized",
      "msg": "Account is not initialized"
    },
    {
      "code": 6006,
      "name": "MissingRemainingAccount",
      "msg": "Missing expected remaining account"
    },
    {
      "code": 6007,
      "name": "NumericalOverflowError",
      "msg": "Numerical overflow error"
    },
    {
      "code": 6008,
      "name": "RequiredGroupLabelNotFound",
      "msg": "Missing required group label"
    },
    {
      "code": 6009,
      "name": "GroupNotFound",
      "msg": "Group not found"
    },
    {
      "code": 6010,
      "name": "ExceededLength",
      "msg": "Value exceeded maximum length"
    },
    {
      "code": 6011,
      "name": "CandyMachineEmpty",
      "msg": "Candy machine is empty"
    },
    {
      "code": 6012,
      "name": "InstructionNotFound",
      "msg": "No instruction was found"
    },
    {
      "code": 6013,
      "name": "CollectionKeyMismatch",
      "msg": "Collection public key mismatch"
    },
    {
      "code": 6014,
      "name": "MissingCollectionAccounts",
      "msg": "Missing collection accounts"
    },
    {
      "code": 6015,
      "name": "CollectionUpdateAuthorityKeyMismatch",
      "msg": "Collection update authority public key mismatch"
    },
    {
      "code": 6016,
      "name": "MintNotLastTransaction",
      "msg": "Mint must be the last instructions of the transaction"
    },
    {
      "code": 6017,
      "name": "MintNotLive",
      "msg": "Mint is not live"
    },
    {
      "code": 6018,
      "name": "NotEnoughSOL",
      "msg": "Not enough SOL to pay for the mint"
    },
    {
      "code": 6019,
      "name": "TokenBurnFailed",
      "msg": "Token burn failed"
    },
    {
      "code": 6020,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens on the account"
    },
    {
      "code": 6021,
      "name": "TokenTransferFailed",
      "msg": "Token transfer failed"
    },
    {
      "code": 6022,
      "name": "MissingRequiredSignature",
      "msg": "A signature was required but not found"
    },
    {
      "code": 6023,
      "name": "GatewayTokenInvalid",
      "msg": "Gateway token is not valid"
    },
    {
      "code": 6024,
      "name": "AfterEndDate",
      "msg": "Current time is after the set end date"
    },
    {
      "code": 6025,
      "name": "InvalidMintTime",
      "msg": "Current time is not within the allowed mint time"
    },
    {
      "code": 6026,
      "name": "AddressNotFoundInAllowedList",
      "msg": "Address not found on the allowed list"
    },
    {
      "code": 6027,
      "name": "MissingAllowedListProof",
      "msg": "Missing allowed list proof"
    },
    {
      "code": 6028,
      "name": "AllowedListNotEnabled",
      "msg": "Allow list guard is not enabled"
    },
    {
      "code": 6029,
      "name": "AllowedMintLimitReached",
      "msg": "The maximum number of allowed mints was reached"
    },
    {
      "code": 6030,
      "name": "InvalidNftCollection",
      "msg": "Invalid NFT collection"
    },
    {
      "code": 6031,
      "name": "MissingNft",
      "msg": "Missing NFT on the account"
    },
    {
      "code": 6032,
      "name": "MaximumRedeemedAmount",
      "msg": "Current redemeed items is at the set maximum amount"
    },
    {
      "code": 6033,
      "name": "AddressNotAuthorized",
      "msg": "Address not authorized"
    },
    {
      "code": 6034,
      "name": "MissingFreezeInstruction",
      "msg": "Missing freeze instruction data"
    },
    {
      "code": 6035,
      "name": "FreezeGuardNotEnabled",
      "msg": "Freeze guard must be enabled"
    },
    {
      "code": 6036,
      "name": "FreezeNotInitialized",
      "msg": "Freeze must be initialized"
    },
    {
      "code": 6037,
      "name": "MissingFreezePeriod",
      "msg": "Missing freeze period"
    },
    {
      "code": 6038,
      "name": "FreezeEscrowAlreadyExists",
      "msg": "The freeze escrow account already exists"
    },
    {
      "code": 6039,
      "name": "ExceededMaximumFreezePeriod",
      "msg": "Maximum freeze period exceeded"
    },
    {
      "code": 6040,
      "name": "ThawNotEnabled",
      "msg": "Thaw is not enabled"
    },
    {
      "code": 6041,
      "name": "UnlockNotEnabled",
      "msg": "Unlock is not enabled (not all NFTs are thawed)"
    },
    {
      "code": 6042,
      "name": "DuplicatedGroupLabel",
      "msg": "Duplicated group label"
    },
    {
      "code": 6043,
      "name": "DuplicatedMintLimitId",
      "msg": "Duplicated mint limit id"
    },
    {
      "code": 6044,
      "name": "UnauthorizedProgramFound",
      "msg": "An unauthorized program was found in the transaction"
    },
    {
      "code": 6045,
      "name": "ExceededProgramListSize",
      "msg": "Exceeded the maximum number of programs in the additional list"
    },
    {
      "code": 6046,
      "name": "AllocationNotInitialized",
      "msg": "Allocation PDA not initialized"
    },
    {
      "code": 6047,
      "name": "AllocationLimitReached",
      "msg": "Allocation limit was reached"
    },
    {
      "code": 6048,
      "name": "AllocationGuardNotEnabled",
      "msg": "Allocation guard must be enabled"
    },
    {
      "code": 6049,
      "name": "InvalidMintAuthority",
      "msg": "Candy machine has an invalid mint authority"
    },
    {
      "code": 6050,
      "name": "InstructionBuilderFailed",
      "msg": "Instruction could not be created"
    },
    {
      "code": 6051,
      "name": "InvalidAccountVersion",
      "msg": "Invalid account version"
    }
  ],
  "metadata": {
    "address": "Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g",
    "origin": "anchor",
    "binaryVersion": "0.27.0",
    "libVersion": "0.28.0"
  }
}

const candy_machine_core = {
  "version": "3.0.1",
  "name": "candy_machine_core",
  "instructions": [
    {
      "name": "addConfigLines",
      "docs": [
        "Add the configuration (name + uri) of each NFT to the account data.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account",
        "1. `[signer]` Candy Machine authority"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Autority of the candy machine."
          ]
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "configLines",
          "type": {
            "vec": {
              "defined": "ConfigLine"
            }
          }
        }
      ]
    },
    {
      "name": "initialize",
      "docs": [
        "Initialize the candy machine account with the specified data.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[writable]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "2. `[]` Candy Machine authority",
        "3. `[signer]` Payer",
        "4. `[]` Collection metadata",
        "5. `[]` Collection mint",
        "6. `[]` Collection master edition",
        "7. `[signer]` Collection update authority",
        "8. `[writable]` Collection authority record",
        "9. `[]` Token Metadata program",
        "10. `[]` System program"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account. The account space must be allocated to allow accounts larger",
            "than 10kb.",
            ""
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Authority PDA used to verify minted NFTs to the collection.",
            ""
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Candy Machine authority. This is the address that controls the upate of the candy machine.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Payer of the transaction."
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master Edition account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Update authority of the collection. This needs to be a signer so the candy",
            "machine can approve a delegate to verify minted NFTs to the collection."
          ]
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Collection authority record. The delegate is used to verify NFTs.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        }
      ]
    },
    {
      "name": "initializeV2",
      "docs": [
        "Initialize the candy machine account with the specified data and token standard.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[writable]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "2. `[]` Candy Machine authority",
        "3. `[signer]` Payer",
        "4. `[]` Collection metadata",
        "5. `[]` Collection mint",
        "6. `[]` Collection master edition",
        "7. `[signer]` Collection update authority",
        "8. `[writable]` Collection metadata delegate record",
        "9. `[]` Token Metadata program",
        "10. `[]` System program",
        "11. `[]` Instructions sysvar account",
        "12. `[optional]` Token Authorization Rules program",
        "13. `[optional]` Token authorization rules account"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account. The account space must be allocated to allow accounts larger",
            "than 10kb.",
            ""
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Authority PDA used to verify minted NFTs to the collection.",
            ""
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Candy Machine authority. This is the address that controls the upate of the candy machine.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer of the transaction."
          ]
        },
        {
          "name": "ruleSet",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Authorization rule set to be used by minted NFTs.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master Edition account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Update authority of the collection. This needs to be a signer so the candy",
            "machine can approve a delegate to verify minted NFTs to the collection."
          ]
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata delegate record. The delegate is used to verify NFTs.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization Rules program.",
            ""
          ]
        },
        {
          "name": "authorizationRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization rules account for the collection metadata (if any).",
            ""
          ]
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        },
        {
          "name": "tokenStandard",
          "type": "u8"
        }
      ]
    },
    {
      "name": "mint",
      "docs": [
        "Mint an NFT.",
        "",
        "Only the candy machine mint authority is allowed to mint.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[writable]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "2. `[signer]` Candy Machine mint authority",
        "3. `[signer]` Payer",
        "4. `[writable]` Mint account of the NFT",
        "5. `[signer]` Mint authority of the NFT",
        "6. `[writable]` Metadata account of the NFT",
        "7. `[writable]` Master edition account of the NFT",
        "8. `[optional]` Collection authority record",
        "9. `[]` Collection mint",
        "10. `[writable]` Collection metadata",
        "11. `[]` Collection master edition",
        "12. `[]` Collection update authority",
        "13. `[]` Token Metadata program",
        "14. `[]` SPL Token program",
        "15. `[]` System program",
        "16. `[]` SlotHashes sysvar cluster data."
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine account."
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine authority account. This is the account that holds a delegate",
            "to verify an item into the collection.",
            ""
          ]
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Candy machine mint authority (mint only allowed for the mint_authority)."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer for the transaction and account allocation (rent)."
          ]
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Mint account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "nftMintAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Mint authority of the NFT. In most cases this will be the owner of the NFT."
          ]
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the NFT. This account must be uninitialized.",
            ""
          ]
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Master edition account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Collection authority record account is either the delegated authority record (legacy)",
            "or a metadata delegate record for the `authority_pda`. The delegate is set when a new collection",
            "is set to the candy machine.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master edition account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Update authority of the collection NFT.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "recentSlothashes",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SlotHashes sysvar cluster data.",
            ""
          ]
        }
      ],
      "args": []
    },
    {
      "name": "mintV2",
      "docs": [
        "Mint an NFT.",
        "",
        "Only the candy machine mint authority is allowed to mint. This handler mints both",
        "NFTs and Programmable NFTs.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[writable]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "2. `[signer]` Candy Machine mint authority",
        "3. `[signer]` Payer",
        "4. `[writable]` Mint account of the NFT",
        "5. `[]` Mint authority of the NFT",
        "6. `[writable]` Metadata account of the NFT",
        "7. `[writable]` Master edition account of the NFT",
        "8. `[optional, writable]` Destination token account",
        "9. `[optional, writable]` Token record",
        "10. `[]` Collection delegate or authority record",
        "11. `[]` Collection mint",
        "12. `[writable]` Collection metadata",
        "13. `[]` Collection master edition",
        "14. `[]` Collection update authority",
        "15. `[]` Token Metadata program",
        "16. `[]` SPL Token program",
        "17. `[optional]` SPL Associated Token program",
        "18. `[]` System program",
        "19. `[optional]` Instructions sysvar account",
        "20. `[]` SlotHashes sysvar cluster data."
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine account."
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine authority account. This is the account that holds a delegate",
            "to verify an item into the collection.",
            ""
          ]
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Candy machine mint authority (mint only allowed for the mint_authority)."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer for the transaction and account allocation (rent)."
          ]
        },
        {
          "name": "nftOwner",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "NFT account owner.",
            ""
          ]
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Mint account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "nftMintAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Mint authority of the NFT. In most cases this will be the owner of the NFT."
          ]
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the NFT. This account must be uninitialized.",
            ""
          ]
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Master edition account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "token",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Destination token account (required for pNFT).",
            ""
          ]
        },
        {
          "name": "tokenRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token record (required for pNFT).",
            ""
          ]
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Collection authority or metadata delegate record.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master edition account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Update authority of the collection NFT.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "splTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program."
          ]
        },
        {
          "name": "splAtaProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "SPL Associated Token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "recentSlothashes",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SlotHashes sysvar cluster data.",
            ""
          ]
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization Rules program.",
            ""
          ]
        },
        {
          "name": "authorizationRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization rules account for the collection metadata (if any).",
            ""
          ]
        }
      ],
      "args": []
    },
    {
      "name": "setAuthority",
      "docs": [
        "Set a new authority of the candy machine.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account",
        "1. `[signer]` Candy Machine authority"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Autority of the candy machine."
          ]
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setCollection",
      "docs": [
        "Set the collection mint for the candy machine.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[signer]` Candy Machine authority",
        "2. `[]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "3. `[signer]` Payer",
        "4. `[]` Collection mint",
        "5. `[]` Collection metadata",
        "6. `[writable]` Collection authority record",
        "7. `[signer]` New collection update authority",
        "8. `[]` Collection metadata",
        "9. `[]` Collection mint",
        "10. `[]` New collection master edition",
        "11. `[]` New collection authority record",
        "12. `[]` Token Metadata program",
        "13. `[]` System program"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Candy Machine authority."
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Authority PDA.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Payer of the transaction."
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Collection authority record.",
            ""
          ]
        },
        {
          "name": "newCollectionUpdateAuthority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Update authority of the new collection NFT."
          ]
        },
        {
          "name": "newCollectionMetadata",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "New collection metadata.",
            ""
          ]
        },
        {
          "name": "newCollectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "New collection mint.",
            ""
          ]
        },
        {
          "name": "newCollectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "New collection master edition.",
            ""
          ]
        },
        {
          "name": "newCollectionAuthorityRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "New collection authority record.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "setCollectionV2",
      "docs": [
        "Set the collection mint for the candy machine.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[signer]` Candy Machine authority",
        "2. `[]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "3. `[signer]` Payer",
        "4. `[]` Collection update authority",
        "5. `[]` Collection mint",
        "6. `[]` Collection metadata",
        "7. `[optional, writable]` Metadata delegate record",
        "8. `[optional, writable]` Collection authority record",
        "9. `[signer]` New collection update authority",
        "10. `[]` New collection mint",
        "11. `[]` New collection metadata",
        "12. `[]` New collection master edition",
        "13. `[writable]` New collection metadata delegate record",
        "14. `[]` Token Metadata program",
        "15. `[]` System program",
        "16. `[]` Instructions sysvar account",
        "17. `[optional]` Token Authorization Rules program",
        "18. `[optional]` Token authorization rules account"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Candy Machine authority."
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Authority PDA.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer of the transaction."
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Update authority of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection.",
            ""
          ]
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Collection authority or metadata delegate record.",
            ""
          ]
        },
        {
          "name": "newCollectionUpdateAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Update authority of the new collection NFT."
          ]
        },
        {
          "name": "newCollectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "New collection mint.",
            ""
          ]
        },
        {
          "name": "newCollectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "New collection metadata.",
            ""
          ]
        },
        {
          "name": "newCollectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "New collection master edition.",
            ""
          ]
        },
        {
          "name": "newCollectionDelegateRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "New metadata delegate record.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization Rules program.",
            ""
          ]
        },
        {
          "name": "authorizationRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization rules account for the collection metadata (if any).",
            ""
          ]
        }
      ],
      "args": []
    },
    {
      "name": "setMintAuthority",
      "docs": [
        "Set a new mint authority of the candy machine.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account",
        "1. `[signer]` Candy Machine authority",
        "1. `[signer]` New candy machine authority"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Candy Machine authority"
          ]
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "New candy machine authority"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "setTokenStandard",
      "docs": [
        "Set the token standard of the minted NFTs.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account (must be pre-allocated but zero content)",
        "1. `[signer]` Candy Machine authority",
        "2. `[]` Authority PDA (seeds `[\"candy_machine\", candy machine id]`)",
        "3. `[signer]` Payer",
        "4. `[optional, writable]` Metadata delegate record",
        "5. `[]` Collection mint",
        "6. `[]` Collection metadata",
        "7. `[optional, writable]` Collection authority record",
        "8. `[]` Collection update authority",
        "9. `[]` Token Metadata program",
        "10. `[]` System program",
        "11. `[]` Instructions sysvar account",
        "12. `[optional]` Token Authorization Rules program",
        "13. `[optional]` Token authorization rules account"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Candy Machine authority."
          ]
        },
        {
          "name": "authorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Authority PDA.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer of the transaction."
          ]
        },
        {
          "name": "ruleSet",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Authorization rule set to be used by minted NFTs.",
            ""
          ]
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Collection metadata delegate record.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Collection mint.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Collection metadata.",
            ""
          ]
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Collection authority record.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Collection update authority."
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "authorizationRulesProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization Rules program.",
            ""
          ]
        },
        {
          "name": "authorizationRules",
          "isMut": false,
          "isSigner": false,
          "isOptional": true,
          "docs": [
            "Token Authorization rules account for the collection metadata (if any).",
            ""
          ]
        }
      ],
      "args": [
        {
          "name": "tokenStandard",
          "type": "u8"
        }
      ]
    },
    {
      "name": "update",
      "docs": [
        "Update the candy machine configuration.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account",
        "1. `[signer]` Candy Machine authority"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine account."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the candy machine."
          ]
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "Withdraw the rent lamports and send them to the authority address.",
        "",
        "# Accounts",
        "",
        "0. `[writable]` Candy Machine account",
        "1. `[signer]` Candy Machine authority"
      ],
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine acccount."
          ]
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Authority of the candy machine."
          ]
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "CandyMachine",
      "docs": [
        "Candy machine state and config data."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "version",
            "docs": [
              "Version of the account."
            ],
            "type": {
              "defined": "AccountVersion"
            }
          },
          {
            "name": "tokenStandard",
            "docs": [
              "Token standard to mint NFTs."
            ],
            "type": "u8"
          },
          {
            "name": "features",
            "docs": [
              "Features flags."
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "authority",
            "docs": [
              "Authority address."
            ],
            "type": "publicKey"
          },
          {
            "name": "mintAuthority",
            "docs": [
              "Authority address allowed to mint from the candy machine."
            ],
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "docs": [
              "The collection mint for the candy machine."
            ],
            "type": "publicKey"
          },
          {
            "name": "itemsRedeemed",
            "docs": [
              "Number of assets redeemed."
            ],
            "type": "u64"
          },
          {
            "name": "data",
            "docs": [
              "Candy machine configuration data."
            ],
            "type": {
              "defined": "CandyMachineData"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CandyMachineData",
      "docs": [
        "Candy machine configuration data."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "itemsAvailable",
            "docs": [
              "Number of assets available"
            ],
            "type": "u64"
          },
          {
            "name": "symbol",
            "docs": [
              "Symbol for the asset"
            ],
            "type": "string"
          },
          {
            "name": "sellerFeeBasisPoints",
            "docs": [
              "Secondary sales royalty basis points (0-10000)"
            ],
            "type": "u16"
          },
          {
            "name": "maxSupply",
            "docs": [
              "Max supply of each individual asset (default 0)"
            ],
            "type": "u64"
          },
          {
            "name": "isMutable",
            "docs": [
              "Indicates if the asset is mutable or not (default yes)"
            ],
            "type": "bool"
          },
          {
            "name": "creators",
            "docs": [
              "List of creators"
            ],
            "type": {
              "vec": {
                "defined": "Creator"
              }
            }
          },
          {
            "name": "configLineSettings",
            "docs": [
              "Config line settings"
            ],
            "type": {
              "option": {
                "defined": "ConfigLineSettings"
              }
            }
          },
          {
            "name": "hiddenSettings",
            "docs": [
              "Hidden setttings"
            ],
            "type": {
              "option": {
                "defined": "HiddenSettings"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Creator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "docs": [
              "Pubkey address"
            ],
            "type": "publicKey"
          },
          {
            "name": "verified",
            "docs": [
              "Whether the creator is verified or not"
            ],
            "type": "bool"
          },
          {
            "name": "percentageShare",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "HiddenSettings",
      "docs": [
        "Hidden settings for large mints used with off-chain data."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "Asset prefix name"
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "Shared URI"
            ],
            "type": "string"
          },
          {
            "name": "hash",
            "docs": [
              "Hash of the hidden settings file"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ConfigLineSettings",
      "docs": [
        "Config line settings to allocate space for individual name + URI."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "prefixName",
            "docs": [
              "Common name prefix"
            ],
            "type": "string"
          },
          {
            "name": "nameLength",
            "docs": [
              "Length of the remaining part of the name"
            ],
            "type": "u32"
          },
          {
            "name": "prefixUri",
            "docs": [
              "Common URI prefix"
            ],
            "type": "string"
          },
          {
            "name": "uriLength",
            "docs": [
              "Length of the remaining part of the URI"
            ],
            "type": "u32"
          },
          {
            "name": "isSequential",
            "docs": [
              "Indicates whether to use a senquential index generator or not"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "ConfigLine",
      "docs": [
        "Config line struct for storing asset (NFT) data pre-mint."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "docs": [
              "Name of the asset."
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "URI to JSON metadata."
            ],
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "AccountVersion",
      "docs": [
        "Account versioning."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V1"
          },
          {
            "name": "V2"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectOwner",
      "msg": "Account does not have correct owner"
    },
    {
      "code": 6001,
      "name": "Uninitialized",
      "msg": "Account is not initialized"
    },
    {
      "code": 6002,
      "name": "MintMismatch",
      "msg": "Mint Mismatch"
    },
    {
      "code": 6003,
      "name": "IndexGreaterThanLength",
      "msg": "Index greater than length"
    },
    {
      "code": 6004,
      "name": "NumericalOverflowError",
      "msg": "Numerical overflow error"
    },
    {
      "code": 6005,
      "name": "TooManyCreators",
      "msg": "Can only provide up to 4 creators to candy machine (because candy machine is one)"
    },
    {
      "code": 6006,
      "name": "CandyMachineEmpty",
      "msg": "Candy machine is empty"
    },
    {
      "code": 6007,
      "name": "HiddenSettingsDoNotHaveConfigLines",
      "msg": "Candy machines using hidden uris do not have config lines, they have a single hash representing hashed order"
    },
    {
      "code": 6008,
      "name": "CannotChangeNumberOfLines",
      "msg": "Cannot change number of lines unless is a hidden config"
    },
    {
      "code": 6009,
      "name": "CannotSwitchToHiddenSettings",
      "msg": "Cannot switch to hidden settings after items available is greater than 0"
    },
    {
      "code": 6010,
      "name": "IncorrectCollectionAuthority",
      "msg": "Incorrect collection NFT authority"
    },
    {
      "code": 6011,
      "name": "MetadataAccountMustBeEmpty",
      "msg": "The metadata account has data in it, and this must be empty to mint a new NFT"
    },
    {
      "code": 6012,
      "name": "NoChangingCollectionDuringMint",
      "msg": "Can't change collection settings after items have begun to be minted"
    },
    {
      "code": 6013,
      "name": "ExceededLengthError",
      "msg": "Value longer than expected maximum value"
    },
    {
      "code": 6014,
      "name": "MissingConfigLinesSettings",
      "msg": "Missing config lines settings"
    },
    {
      "code": 6015,
      "name": "CannotIncreaseLength",
      "msg": "Cannot increase the length in config lines settings"
    },
    {
      "code": 6016,
      "name": "CannotSwitchFromHiddenSettings",
      "msg": "Cannot switch from hidden settings"
    },
    {
      "code": 6017,
      "name": "CannotChangeSequentialIndexGeneration",
      "msg": "Cannot change sequential index generation after items have begun to be minted"
    },
    {
      "code": 6018,
      "name": "CollectionKeyMismatch",
      "msg": "Collection public key mismatch"
    },
    {
      "code": 6019,
      "name": "CouldNotRetrieveConfigLineData",
      "msg": "Could not retrive config line data"
    },
    {
      "code": 6020,
      "name": "NotFullyLoaded",
      "msg": "Not all config lines were added to the candy machine"
    },
    {
      "code": 6021,
      "name": "InstructionBuilderFailed",
      "msg": "Instruction could not be created"
    },
    {
      "code": 6022,
      "name": "MissingCollectionAuthorityRecord",
      "msg": "Missing collection authority record"
    },
    {
      "code": 6023,
      "name": "MissingMetadataDelegateRecord",
      "msg": "Missing metadata delegate record"
    },
    {
      "code": 6024,
      "name": "InvalidTokenStandard",
      "msg": "Invalid token standard"
    },
    {
      "code": 6025,
      "name": "MissingTokenAccount",
      "msg": "Missing token account"
    },
    {
      "code": 6026,
      "name": "MissingTokenRecord",
      "msg": "Missing token record"
    },
    {
      "code": 6027,
      "name": "MissingInstructionsSysvar",
      "msg": "Missing instructions sysvar account"
    },
    {
      "code": 6028,
      "name": "MissingSplAtaProgram",
      "msg": "Missing SPL ATA program"
    },
    {
      "code": 6029,
      "name": "InvalidAccountVersion",
      "msg": "Invalid account version"
    }
  ],
  "metadata": {
    "address": "CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR",
    "origin": "anchor",
    "binaryVersion": "0.27.0",
    "libVersion": "0.28.0"
  }
}

const candy_machine = {
  "version": "4.6.0",
  "name": "candy_machine",
  "instructions": [
    {
      "name": "initializeCandyMachine",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        }
      ]
    },
    {
      "name": "updateCandyMachine",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        }
      ]
    },
    {
      "name": "updateAuthority",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": {
            "option": "publicKey"
          }
        }
      ]
    },
    {
      "name": "addConfigLines",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "configLines",
          "type": {
            "vec": {
              "defined": "ConfigLine"
            }
          }
        }
      ]
    },
    {
      "name": "setCollection",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "removeCollection",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineCreator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "updateAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "masterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "creatorBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setCollectionDuringMint",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "collectionPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "collectionAuthorityRecord",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "setFreeze",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "freezePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "freezeTime",
          "type": "i64"
        }
      ]
    },
    {
      "name": "removeFreeze",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "freezePda",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "thawNft",
      "accounts": [
        {
          "name": "freezePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "edition",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unlockFunds",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "freezePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "CandyMachine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "wallet",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "itemsRedeemed",
            "type": "u64"
          },
          {
            "name": "data",
            "type": {
              "defined": "CandyMachineData"
            }
          }
        ]
      }
    },
    {
      "name": "CollectionPDA",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "candyMachine",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "FreezePDA",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "candyMachine",
            "type": "publicKey"
          },
          {
            "name": "allowThaw",
            "type": "bool"
          },
          {
            "name": "frozenCount",
            "type": "u64"
          },
          {
            "name": "mintStart",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "freezeTime",
            "type": "i64"
          },
          {
            "name": "freezeFee",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CandyMachineData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uuid",
            "type": "string"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "maxSupply",
            "type": "u64"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "retainAuthority",
            "type": "bool"
          },
          {
            "name": "goLiveDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "endSettings",
            "type": {
              "option": {
                "defined": "EndSettings"
              }
            }
          },
          {
            "name": "creators",
            "type": {
              "vec": {
                "defined": "Creator"
              }
            }
          },
          {
            "name": "hiddenSettings",
            "type": {
              "option": {
                "defined": "HiddenSettings"
              }
            }
          },
          {
            "name": "whitelistMintSettings",
            "type": {
              "option": {
                "defined": "WhitelistMintSettings"
              }
            }
          },
          {
            "name": "itemsAvailable",
            "type": "u64"
          },
          {
            "name": "gatekeeper",
            "type": {
              "option": {
                "defined": "GatekeeperConfig"
              }
            }
          }
        ]
      }
    },
    {
      "name": "ConfigLine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "EndSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "endSettingType",
            "type": {
              "defined": "EndSettingType"
            }
          },
          {
            "name": "number",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Creator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "share",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "HiddenSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "hash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "WhitelistMintSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mode",
            "type": {
              "defined": "WhitelistMintMode"
            }
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "presale",
            "type": "bool"
          },
          {
            "name": "discountPrice",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "GatekeeperConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gatekeeperNetwork",
            "type": "publicKey"
          },
          {
            "name": "expireOnUse",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "EndSettingType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Date"
          },
          {
            "name": "Amount"
          }
        ]
      }
    },
    {
      "name": "WhitelistMintMode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "BurnEveryTime"
          },
          {
            "name": "NeverBurn"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "IncorrectOwner",
      "msg": "Account does not have correct owner!"
    },
    {
      "code": 6001,
      "name": "Uninitialized",
      "msg": "Account is not initialized!"
    },
    {
      "code": 6002,
      "name": "MintMismatch",
      "msg": "Mint Mismatch!"
    },
    {
      "code": 6003,
      "name": "IndexGreaterThanLength",
      "msg": "Index greater than length!"
    },
    {
      "code": 6004,
      "name": "NumericalOverflowError",
      "msg": "Numerical overflow error!"
    },
    {
      "code": 6005,
      "name": "TooManyCreators",
      "msg": "Can only provide up to 4 creators to candy machine (because candy machine is one)!"
    },
    {
      "code": 6006,
      "name": "UuidMustBeExactly6Length",
      "msg": "Uuid must be exactly of 6 length"
    },
    {
      "code": 6007,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens to pay for this minting"
    },
    {
      "code": 6008,
      "name": "NotEnoughSOL",
      "msg": "Not enough SOL to pay for this minting"
    },
    {
      "code": 6009,
      "name": "TokenTransferFailed",
      "msg": "Token transfer failed"
    },
    {
      "code": 6010,
      "name": "CandyMachineEmpty",
      "msg": "Candy machine is empty!"
    },
    {
      "code": 6011,
      "name": "CandyMachineNotLive",
      "msg": "Candy machine is not live!"
    },
    {
      "code": 6012,
      "name": "HiddenSettingsConfigsDoNotHaveConfigLines",
      "msg": "Configs that are using hidden uris do not have config lines, they have a single hash representing hashed order"
    },
    {
      "code": 6013,
      "name": "CannotChangeNumberOfLines",
      "msg": "Cannot change number of lines unless is a hidden config"
    },
    {
      "code": 6014,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid"
    },
    {
      "code": 6015,
      "name": "PublicKeyMismatch",
      "msg": "Public key mismatch"
    },
    {
      "code": 6016,
      "name": "NoWhitelistToken",
      "msg": "No whitelist token present"
    },
    {
      "code": 6017,
      "name": "TokenBurnFailed",
      "msg": "Token burn failed"
    },
    {
      "code": 6018,
      "name": "GatewayAppMissing",
      "msg": "Missing gateway app when required"
    },
    {
      "code": 6019,
      "name": "GatewayTokenMissing",
      "msg": "Missing gateway token when required"
    },
    {
      "code": 6020,
      "name": "GatewayTokenExpireTimeInvalid",
      "msg": "Invalid gateway token expire time"
    },
    {
      "code": 6021,
      "name": "NetworkExpireFeatureMissing",
      "msg": "Missing gateway network expire feature when required"
    },
    {
      "code": 6022,
      "name": "CannotFindUsableConfigLine",
      "msg": "Unable to find an unused config line near your random number index"
    },
    {
      "code": 6023,
      "name": "InvalidString",
      "msg": "Invalid string"
    },
    {
      "code": 6024,
      "name": "SuspiciousTransaction",
      "msg": "Suspicious transaction detected"
    },
    {
      "code": 6025,
      "name": "CannotSwitchToHiddenSettings",
      "msg": "Cannot Switch to Hidden Settings after items available is greater than 0"
    },
    {
      "code": 6026,
      "name": "IncorrectSlotHashesPubkey",
      "msg": "Incorrect SlotHashes PubKey"
    },
    {
      "code": 6027,
      "name": "IncorrectCollectionAuthority",
      "msg": "Incorrect collection NFT authority"
    },
    {
      "code": 6028,
      "name": "MismatchedCollectionPDA",
      "msg": "Collection PDA address is invalid"
    },
    {
      "code": 6029,
      "name": "MismatchedCollectionMint",
      "msg": "Provided mint account doesn't match collection PDA mint"
    },
    {
      "code": 6030,
      "name": "SlotHashesEmpty",
      "msg": "Slot hashes Sysvar is empty"
    },
    {
      "code": 6031,
      "name": "MetadataAccountMustBeEmpty",
      "msg": "The metadata account has data in it, and this must be empty to mint a new NFT"
    },
    {
      "code": 6032,
      "name": "MissingSetCollectionDuringMint",
      "msg": "Missing set collection during mint IX for Candy Machine with collection set"
    },
    {
      "code": 6033,
      "name": "NoChangingCollectionDuringMint",
      "msg": "Can't change collection settings after items have begun to be minted"
    },
    {
      "code": 6034,
      "name": "CandyCollectionRequiresRetainAuthority",
      "msg": "Retain authority must be true for Candy Machines with a collection set"
    },
    {
      "code": 6035,
      "name": "GatewayProgramError",
      "msg": "Error within Gateway program"
    },
    {
      "code": 6036,
      "name": "NoChangingFreezeDuringMint",
      "msg": "Can't change freeze settings after items have begun to be minted. You can only disable."
    },
    {
      "code": 6037,
      "name": "NoChangingAuthorityWithCollection",
      "msg": "Can't change authority while collection is enabled. Disable collection first."
    },
    {
      "code": 6038,
      "name": "NoChangingTokenWithFreeze",
      "msg": "Can't change token while freeze is enabled. Disable freeze first."
    },
    {
      "code": 6039,
      "name": "InvalidThawNft",
      "msg": "Cannot thaw NFT unless all NFTs are minted or Candy Machine authority enables thawing"
    },
    {
      "code": 6040,
      "name": "IncorrectRemainingAccountsLen",
      "msg": "The number of remaining accounts passed in doesn't match the Candy Machine settings"
    },
    {
      "code": 6041,
      "name": "MissingFreezeAta",
      "msg": "FreezePDA ATA needs to be passed in if token mint is enabled."
    },
    {
      "code": 6042,
      "name": "IncorrectFreezeAta",
      "msg": "Incorrect freeze ATA address."
    },
    {
      "code": 6043,
      "name": "FreezePDAMismatch",
      "msg": "FreezePDA doesn't belong to this Candy Machine."
    },
    {
      "code": 6044,
      "name": "EnteredFreezeIsMoreThanMaxFreeze",
      "msg": "Freeze time can't be longer than MAX_FREEZE_TIME."
    },
    {
      "code": 6045,
      "name": "NoWithdrawWithFreeze",
      "msg": "Can't withdraw Candy Machine while freeze is active. Disable freeze first."
    },
    {
      "code": 6046,
      "name": "NoWithdrawWithFrozenFunds",
      "msg": "Can't withdraw Candy Machine while frozen funds need to be redeemed. Unlock funds first."
    },
    {
      "code": 6047,
      "name": "MissingRemoveFreezeTokenAccounts",
      "msg": "Missing required remaining accounts for remove_freeze with token mint."
    },
    {
      "code": 6048,
      "name": "InvalidFreezeWithdrawTokenAddress",
      "msg": "Can't withdraw SPL Token from freeze PDA into itself"
    },
    {
      "code": 6049,
      "name": "NoUnlockWithNFTsStillFrozen",
      "msg": "Can't unlock funds while NFTs are still frozen. Run thaw on all NFTs first."
    },
    {
      "code": 6050,
      "name": "SizedCollectionMetadataMustBeMutable",
      "msg": "Setting a sized collection requires the collection metadata to be mutable."
    },
    {
      "code": 6051,
      "name": "CannotSwitchFromHiddenSettings",
      "msg": "Cannot remove Hidden Settings."
    }
  ],
  "metadata": {
    "address":"cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"
  }
}

const gumdrop ={
  "version": "0.1.1",
  "name": "gumdrop",
  "instructions": [
    {
      "name": "newDistributor",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "temporal",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "closeDistributorTokenAccount",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "distributor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeDistributor",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "distributorWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "walletBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "proveClaim",
      "accounts": [
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "temporal",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "claimPrefix",
          "type": "bytes"
        },
        {
          "name": "claimBump",
          "type": "u8"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "claimantSecret",
          "type": "publicKey"
        },
        {
          "name": "resource",
          "type": "publicKey"
        },
        {
          "name": "resourceNonce",
          "type": "bytes"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimStatus",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "to",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "temporal",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "claimBump",
          "type": "u8"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "claimantSecret",
          "type": "publicKey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "claimCandy",
      "accounts": [
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "distributorWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimCount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "temporal",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "candyMachineConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "walletBump",
          "type": "u8"
        },
        {
          "name": "claimBump",
          "type": "u8"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "claimantSecret",
          "type": "publicKey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "claimEdition",
      "accounts": [
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimCount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "temporal",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadataNewMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataNewEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataNewMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataEditionMarkPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataNewMintAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadataMasterTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataNewUpdateAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataMasterMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataMasterMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "claimBump",
          "type": "u8"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "edition",
          "type": "u64"
        },
        {
          "name": "claimantSecret",
          "type": "publicKey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "claimCandyProven",
      "accounts": [
        {
          "name": "distributor",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "distributorWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "claimProof",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "candyMachineConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineMetadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachineMasterEdition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "walletBump",
          "type": "u8"
        },
        {
          "name": "claimBump",
          "type": "u8"
        },
        {
          "name": "index",
          "type": "u64"
        }
      ]
    },
    {
      "name": "recoverUpdateAuthority",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "distributor",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "distributorWallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "newUpdateAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "walletBump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "MerkleDistributor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "root",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "temporal",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ClaimStatus",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "name": "claimant",
            "type": "publicKey"
          },
          {
            "name": "claimedAt",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ClaimCount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "claimant",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ClaimProof",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "claimant",
            "type": "publicKey"
          },
          {
            "name": "resource",
            "type": "publicKey"
          },
          {
            "name": "resourceNonce",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "CandyMachine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "wallet",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "config",
            "type": "publicKey"
          },
          {
            "name": "data",
            "type": {
              "defined": "CandyMachineData"
            }
          },
          {
            "name": "itemsRedeemed",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "data",
            "type": {
              "defined": "ConfigData"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ConfigData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uuid",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "creators",
            "type": {
              "vec": {
                "defined": "Creator"
              }
            }
          },
          {
            "name": "maxSupply",
            "type": "u64"
          },
          {
            "name": "isMutable",
            "type": "bool"
          },
          {
            "name": "retainAuthority",
            "type": "bool"
          },
          {
            "name": "maxNumberOfLines",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Creator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "share",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CandyMachineData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uuid",
            "type": "string"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "itemsAvailable",
            "type": "u64"
          },
          {
            "name": "goLiveDate",
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ClaimedEvent",
      "fields": [
        {
          "name": "index",
          "type": "u64",
          "index": false
        },
        {
          "name": "claimant",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidProof",
      "msg": "Invalid Merkle proof."
    },
    {
      "code": 6001,
      "name": "DropAlreadyClaimed",
      "msg": "Drop already claimed."
    },
    {
      "code": 6002,
      "name": "Unauthorized",
      "msg": "Account is not authorized to execute this instruction"
    },
    {
      "code": 6003,
      "name": "OwnerMismatch",
      "msg": "Token account owner did not match intended owner"
    },
    {
      "code": 6004,
      "name": "TemporalMismatch",
      "msg": "Temporal signer did not match distributor"
    },
    {
      "code": 6005,
      "name": "NumericalOverflow",
      "msg": "Numerical Overflow"
    },
    {
      "code": 6006,
      "name": "InvalidClaimBump",
      "msg": "Invalid Claim Bump"
    },
    {
      "code": 6007,
      "name": "MustUseOfficialCandyMachine",
      "msg": "Gumdrop only supports the official Metaplex Candy machine contracts"
    },
    {
      "code": 6008,
      "name": "BumpSeedNotInHashMap",
      "msg": "Bump seed not in hash map"
    }
  ],
  "metadata": {
    "address": "gdrpGjVffourzkdDRrQmySw4aTHr8a3xmQzzxSwFD1a"
  }
}

const hydra = {
  "version": "0.4.1",
  "name": "hydra",
  "instructions": [
    {
      "name": "processInit",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "InitializeFanoutArgs"
                },
                "path": "args.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-native-account"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitializeFanoutArgs"
          }
        },
        {
          "name": "model",
          "type": {
            "defined": "MembershipModel"
          }
        }
      ]
    },
    {
      "name": "processInitForMint",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mintHoldingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bumpSeed",
          "type": "u8"
        }
      ]
    },
    {
      "name": "processAddMemberWallet",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "processAddMemberNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "AddMemberArgs"
          }
        }
      ]
    },
    {
      "name": "processSetTokenMemberStake",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processSetForTokenMemberStake",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processDistributeNft",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipKey",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "membership_key"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processDistributeWallet",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processDistributeToken",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "holdingAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutForMintMembershipVoucher",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fanoutMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanoutMintMemberTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "distributeForMint",
          "type": "bool"
        }
      ]
    },
    {
      "name": "processSignMetadata",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "holdingAccount",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-native-account"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              }
            ]
          }
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "processTransferShares",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "fromMember",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "toMember",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "fromMembershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "from_member"
              }
            ]
          },
          "relations": [
            "fanout"
          ]
        },
        {
          "name": "toMembershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "to_member"
              }
            ]
          },
          "relations": [
            "fanout"
          ]
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "processUnstake",
      "accounts": [
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          }
        },
        {
          "name": "membershipVoucher",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "membershipMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "membershipMintTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "memberStakeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "processRemoveMember",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "member",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fanout",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-config"
              },
              {
                "kind": "account",
                "type": "string",
                "account": "Fanout",
                "path": "fanout.name"
              }
            ]
          },
          "relations": [
            "authority"
          ]
        },
        {
          "name": "membershipAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "fanout-membership"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Fanout",
                "path": "fanout"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "Fanout",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "accountKey",
            "type": "publicKey"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "totalMembers",
            "type": "u64"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "accountOwnerBumpSeed",
            "type": "u8"
          },
          {
            "name": "totalAvailableShares",
            "type": "u64"
          },
          {
            "name": "membershipModel",
            "type": {
              "defined": "MembershipModel"
            }
          },
          {
            "name": "membershipMint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "totalStakedShares",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "FanoutMint",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastSnapshotAmount",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "FanoutMembershipVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "totalInflow",
            "type": "u64"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "membershipKey",
            "type": "publicKey"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "stakeTime",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "FanoutMembershipMintVoucher",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fanout",
            "type": "publicKey"
          },
          {
            "name": "fanoutMint",
            "type": "publicKey"
          },
          {
            "name": "lastInflow",
            "type": "u64"
          },
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "stakeTime",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AddMemberArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "shares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitializeFanoutArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "nativeAccountBumpSeed",
            "type": "u8"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MembershipModel",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Wallet"
          },
          {
            "name": "Token"
          },
          {
            "name": "NFT"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "BadArtithmetic",
      "msg": "Encountered an arithmetic error"
    },
    {
      "code": 6001,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6002,
      "name": "InsufficientShares",
      "msg": "Not Enough Available Shares"
    },
    {
      "code": 6003,
      "name": "SharesArentAtMax",
      "msg": "All available shares must be assigned to a member"
    },
    {
      "code": 6004,
      "name": "NewMintAccountRequired",
      "msg": "A New mint account must be provided"
    },
    {
      "code": 6005,
      "name": "MintAccountRequired",
      "msg": "A Token type Fanout requires a Membership Mint"
    },
    {
      "code": 6006,
      "name": "InvalidMembershipModel",
      "msg": "Invalid Membership Model"
    },
    {
      "code": 6007,
      "name": "InvalidMembershipVoucher",
      "msg": "Invalid Membership Voucher"
    },
    {
      "code": 6008,
      "name": "MintDoesNotMatch",
      "msg": "Invalid Mint for the config"
    },
    {
      "code": 6009,
      "name": "InvalidHoldingAccount",
      "msg": "Holding account does not match the config"
    },
    {
      "code": 6010,
      "name": "HoldingAccountMustBeAnATA",
      "msg": "A Mint holding account must be an ata for the mint owned by the config"
    },
    {
      "code": 6011,
      "name": "DerivedKeyInvalid"
    },
    {
      "code": 6012,
      "name": "IncorrectOwner"
    },
    {
      "code": 6013,
      "name": "WalletDoesNotOwnMembershipToken",
      "msg": "Wallet Does not Own Membership Token"
    },
    {
      "code": 6014,
      "name": "InvalidMetadata",
      "msg": "The Metadata specified is not valid Token Metadata"
    },
    {
      "code": 6015,
      "name": "NumericalOverflow"
    },
    {
      "code": 6016,
      "name": "InsufficientBalanceToDistribute",
      "msg": "Not enough new balance to distribute"
    },
    {
      "code": 6017,
      "name": "InvalidFanoutForMint"
    },
    {
      "code": 6018,
      "name": "MustDistribute",
      "msg": "This operation must be the instruction right after a distrobution on the same accounts."
    },
    {
      "code": 6019,
      "name": "InvalidStakeAta"
    },
    {
      "code": 6020,
      "name": "CannotTransferToSelf"
    },
    {
      "code": 6021,
      "name": "TransferNotSupported",
      "msg": "Transfer is not supported on this membership model"
    },
    {
      "code": 6022,
      "name": "RemoveNotSupported",
      "msg": "Remove is not supported on this membership model"
    },
    {
      "code": 6023,
      "name": "RemoveSharesMustBeZero",
      "msg": "Before you remove a wallet or NFT member please transfer the shares to another member"
    },
    {
      "code": 6024,
      "name": "InvalidCloseAccountDestination",
      "msg": "Sending Sol to a SPL token destination will render the sol unusable"
    }
  ],
  "metadata": {
    "address":"hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg"
  }
}

const token_entangler = {
  "version": "0.1.3",
  "name": "token_entangler",
  "instructions": [
    {
      "name": "createEntangledPair",
      "accounts": [
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "editionA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "editionB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reverseEntangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "reverseBump",
          "type": "u8"
        },
        {
          "name": "tokenAEscrowBump",
          "type": "u8"
        },
        {
          "name": "tokenBEscrowBump",
          "type": "u8"
        },
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "paysEveryTime",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateEntangledPair",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "paysEveryTime",
          "type": "bool"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "treasuryMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "paymentAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentTransferAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "token",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replacementTokenMetadata",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replacementTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replacementToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transferAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenAEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "entangledPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "ataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "EntangledPair",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "treasuryMint",
            "type": "publicKey"
          },
          {
            "name": "mintA",
            "type": "publicKey"
          },
          {
            "name": "mintB",
            "type": "publicKey"
          },
          {
            "name": "tokenAEscrow",
            "type": "publicKey"
          },
          {
            "name": "tokenBEscrow",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tokenAEscrowBump",
            "type": "u8"
          },
          {
            "name": "tokenBEscrowBump",
            "type": "u8"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "paid",
            "type": "bool"
          },
          {
            "name": "paysEveryTime",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "PublicKeyMismatch",
      "msg": "PublicKeyMismatch"
    },
    {
      "code": 6001,
      "name": "InvalidMintAuthority",
      "msg": "InvalidMintAuthority"
    },
    {
      "code": 6002,
      "name": "UninitializedAccount",
      "msg": "UninitializedAccount"
    },
    {
      "code": 6003,
      "name": "IncorrectOwner",
      "msg": "IncorrectOwner"
    },
    {
      "code": 6004,
      "name": "PublicKeysShouldBeUnique",
      "msg": "PublicKeysShouldBeUnique"
    },
    {
      "code": 6005,
      "name": "StatementFalse",
      "msg": "StatementFalse"
    },
    {
      "code": 6006,
      "name": "NotRentExempt",
      "msg": "NotRentExempt"
    },
    {
      "code": 6007,
      "name": "NumericalOverflow",
      "msg": "NumericalOverflow"
    },
    {
      "code": 6008,
      "name": "DerivedKeyInvalid",
      "msg": "Derived key invalid"
    },
    {
      "code": 6009,
      "name": "MetadataDoesntExist",
      "msg": "Metadata doesn't exist"
    },
    {
      "code": 6010,
      "name": "EditionDoesntExist",
      "msg": "Edition doesn't exist"
    },
    {
      "code": 6011,
      "name": "InvalidTokenAmount",
      "msg": "Invalid token amount"
    },
    {
      "code": 6012,
      "name": "InvalidMint",
      "msg": "This token is not a valid mint for this entangled pair"
    },
    {
      "code": 6013,
      "name": "EntangledPairExists",
      "msg": "This pair already exists as it's reverse"
    },
    {
      "code": 6014,
      "name": "MustHaveSupplyOne",
      "msg": "Must have supply one!"
    },
    {
      "code": 6015,
      "name": "BumpSeedNotInHashMap",
      "msg": "Bump seed not in hash map"
    }
  ],
  "metadata": {
    "address": "qntmGodpGkrM42mN68VCZHXnKqDCT8rdY23wFcXCLPd"
  }
}
/*
const token_metadata = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
const auctioneer = "neer8g6yJq2mQM6KbnViEDAD4gr3gRZyMMf4F2p3MEh";
const fixed_price_sale = "SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo"
const nft_packs = "packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu"
*/