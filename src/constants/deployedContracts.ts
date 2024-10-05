export const ventura = {
  address: "0xBbcD22fd30EFA3c859f3C30a7224aB257D20b112",
  abi: [
    {
      inputs: [
        { internalType: "address", name: "_owner", type: "address" },
        { internalType: "address", name: "_paymentToken", type: "address" },
        { internalType: "address", name: "nftAddress", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "ADDRESS_ZERO_NOT_ALLOWED", type: "error" },
    { inputs: [], name: "CAN_NOT_REGISTER_FOR_YOUR_OWN_EVENT", type: "error" },
    {
      inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      name: "EVENT_NOT_FOUND",
      type: "error",
    },
    { inputs: [], name: "EVENT_STILL_ON", type: "error" },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "INSUFFICIENT_VALUE",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "IS_A_PARTICIPANT",
      type: "error",
    },
    { inputs: [], name: "N0_EVENT", type: "error" },
    { inputs: [], name: "NOT_REGISTERED", type: "error" },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    { inputs: [], name: "REGISTRATION_NOT_ON", type: "error" },
    { inputs: [], name: "REG_IS_OVER", type: "error" },
    { inputs: [], name: "TOO_LATE_TO_CANCEL_EVENT", type: "error" },
    { inputs: [], name: "UNAUTHORIZED", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "scanner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "participant",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "eventId",
          type: "bytes32",
        },
      ],
      name: "BarcodeScanned",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "_eventId",
          type: "bytes32",
        },
      ],
      name: "EventCancelled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "eventId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "enum IVentura.EventType",
          name: "EventType",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "string",
          name: "eventTitle",
          type: "string",
        },
      ],
      name: "EventCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "eventId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "string",
          name: "message",
          type: "string",
        },
      ],
      name: "RegInfo",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "participant",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "eventId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
      ],
      name: "Registered",
      type: "event",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "cancelEvent",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "string", name: "eventTitle", type: "string" },
            { internalType: "string", name: "imageUrl", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "string", name: "venue", type: "string" },
            { internalType: "uint256[]", name: "eventDate", type: "uint256[]" },
            { internalType: "string", name: "startTime", type: "string" },
            { internalType: "string", name: "endTime", type: "string" },
          ],
          internalType: "struct IVentura.EventData",
          name: "_eventData",
          type: "tuple",
        },
      ],
      name: "createEvent",
      outputs: [{ internalType: "bool", name: "_success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "eventIsOver",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "events",
      outputs: [
        { internalType: "address", name: "creator", type: "address" },
        { internalType: "bytes32", name: "eventId", type: "bytes32" },
        { internalType: "string", name: "imageUrl", type: "string" },
        { internalType: "string", name: "eventTitle", type: "string" },
        { internalType: "string", name: "description", type: "string" },
        { internalType: "string", name: "venue", type: "string" },
        { internalType: "uint256", name: "price", type: "uint256" },
        {
          components: [
            { internalType: "string", name: "startTime", type: "string" },
            { internalType: "string", name: "endTime", type: "string" },
          ],
          internalType: "struct IVentura.Timing",
          name: "timing",
          type: "tuple",
        },
        {
          internalType: "enum IVentura.EventType",
          name: "eventType",
          type: "uint8",
        },
        { internalType: "uint256", name: "createdAt", type: "uint256" },
        {
          components: [
            { internalType: "bool", name: "regIsOn", type: "bool" },
            { internalType: "bool", name: "isOver", type: "bool" },
            { internalType: "bool", name: "cancelled", type: "bool" },
          ],
          internalType: "struct IVentura.BoolCheck",
          name: "boolCheck",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      name: "eventsCreated",
      outputs: [
        { internalType: "address", name: "creator", type: "address" },
        { internalType: "bytes32", name: "eventId", type: "bytes32" },
        { internalType: "string", name: "imageUrl", type: "string" },
        { internalType: "string", name: "eventTitle", type: "string" },
        { internalType: "string", name: "description", type: "string" },
        { internalType: "string", name: "venue", type: "string" },
        { internalType: "uint256", name: "price", type: "uint256" },
        {
          components: [
            { internalType: "string", name: "startTime", type: "string" },
            { internalType: "string", name: "endTime", type: "string" },
          ],
          internalType: "struct IVentura.Timing",
          name: "timing",
          type: "tuple",
        },
        {
          internalType: "enum IVentura.EventType",
          name: "eventType",
          type: "uint8",
        },
        { internalType: "uint256", name: "createdAt", type: "uint256" },
        {
          components: [
            { internalType: "bool", name: "regIsOn", type: "bool" },
            { internalType: "bool", name: "isOver", type: "bool" },
            { internalType: "bool", name: "cancelled", type: "bool" },
          ],
          internalType: "struct IVentura.BoolCheck",
          name: "boolCheck",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllEvents",
      outputs: [
        {
          components: [
            { internalType: "address", name: "creator", type: "address" },
            { internalType: "bytes32", name: "eventId", type: "bytes32" },
            { internalType: "string", name: "imageUrl", type: "string" },
            { internalType: "string", name: "eventTitle", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "string", name: "venue", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
            {
              internalType: "address[]",
              name: "participants",
              type: "address[]",
            },
            { internalType: "uint256[]", name: "eventDate", type: "uint256[]" },
            {
              components: [
                { internalType: "string", name: "startTime", type: "string" },
                { internalType: "string", name: "endTime", type: "string" },
              ],
              internalType: "struct IVentura.Timing",
              name: "timing",
              type: "tuple",
            },
            {
              internalType: "enum IVentura.EventType",
              name: "eventType",
              type: "uint8",
            },
            { internalType: "uint256", name: "createdAt", type: "uint256" },
            {
              components: [
                { internalType: "bool", name: "regIsOn", type: "bool" },
                { internalType: "bool", name: "isOver", type: "bool" },
                { internalType: "bool", name: "cancelled", type: "bool" },
              ],
              internalType: "struct IVentura.BoolCheck",
              name: "boolCheck",
              type: "tuple",
            },
          ],
          internalType: "struct IVentura.Event[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_creator", type: "address" }],
      name: "getEeventsByCreator",
      outputs: [
        {
          components: [
            { internalType: "address", name: "creator", type: "address" },
            { internalType: "bytes32", name: "eventId", type: "bytes32" },
            { internalType: "string", name: "imageUrl", type: "string" },
            { internalType: "string", name: "eventTitle", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "string", name: "venue", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
            {
              internalType: "address[]",
              name: "participants",
              type: "address[]",
            },
            { internalType: "uint256[]", name: "eventDate", type: "uint256[]" },
            {
              components: [
                { internalType: "string", name: "startTime", type: "string" },
                { internalType: "string", name: "endTime", type: "string" },
              ],
              internalType: "struct IVentura.Timing",
              name: "timing",
              type: "tuple",
            },
            {
              internalType: "enum IVentura.EventType",
              name: "eventType",
              type: "uint8",
            },
            { internalType: "uint256", name: "createdAt", type: "uint256" },
            {
              components: [
                { internalType: "bool", name: "regIsOn", type: "bool" },
                { internalType: "bool", name: "isOver", type: "bool" },
                { internalType: "bool", name: "cancelled", type: "bool" },
              ],
              internalType: "struct IVentura.BoolCheck",
              name: "boolCheck",
              type: "tuple",
            },
          ],
          internalType: "struct IVentura.Event[]",
          name: "_allEvents",
          type: "tuple[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "getEventById",
      outputs: [
        {
          components: [
            { internalType: "address", name: "creator", type: "address" },
            { internalType: "bytes32", name: "eventId", type: "bytes32" },
            { internalType: "string", name: "imageUrl", type: "string" },
            { internalType: "string", name: "eventTitle", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "string", name: "venue", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
            {
              internalType: "address[]",
              name: "participants",
              type: "address[]",
            },
            { internalType: "uint256[]", name: "eventDate", type: "uint256[]" },
            {
              components: [
                { internalType: "string", name: "startTime", type: "string" },
                { internalType: "string", name: "endTime", type: "string" },
              ],
              internalType: "struct IVentura.Timing",
              name: "timing",
              type: "tuple",
            },
            {
              internalType: "enum IVentura.EventType",
              name: "eventType",
              type: "uint8",
            },
            { internalType: "uint256", name: "createdAt", type: "uint256" },
            {
              components: [
                { internalType: "bool", name: "regIsOn", type: "bool" },
                { internalType: "bool", name: "isOver", type: "bool" },
                { internalType: "bool", name: "cancelled", type: "bool" },
              ],
              internalType: "struct IVentura.BoolCheck",
              name: "boolCheck",
              type: "tuple",
            },
          ],
          internalType: "struct IVentura.Event",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_participant", type: "address" },
        { internalType: "bytes32", name: "_eventId", type: "bytes32" },
      ],
      name: "markAttendnceWithBarcode",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "mintCreatorNFT",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "mintParticipantsNFT",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "registerForEvent",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "registrationOn",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes32", name: "_eventId", type: "bytes32" }],
      name: "registrationOver",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};

export const token = {
  address: "0x442576ef8EA93B6aA30cb7C779b8cC1e402bca5e",
  abi: [
    {
      inputs: [{ internalType: "address", name: "_owner", type: "address" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        { internalType: "address", name: "sender", type: "address" },
        { internalType: "uint256", name: "balance", type: "uint256" },
        { internalType: "uint256", name: "needed", type: "uint256" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "ERC1155InsufficientBalance",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "approver", type: "address" }],
      name: "ERC1155InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        { internalType: "uint256", name: "idsLength", type: "uint256" },
        { internalType: "uint256", name: "valuesLength", type: "uint256" },
      ],
      name: "ERC1155InvalidArrayLength",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "operator", type: "address" }],
      name: "ERC1155InvalidOperator",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "receiver", type: "address" }],
      name: "ERC1155InvalidReceiver",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "sender", type: "address" }],
      name: "ERC1155InvalidSender",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "address", name: "owner", type: "address" },
      ],
      name: "ERC1155MissingApprovalForAll",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    { inputs: [], name: "TOKEN_NOT_TRANSFERABLE", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "TransferBatch",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TransferSingle",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "value",
          type: "string",
        },
        { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "URI",
      type: "event",
    },
    {
      inputs: [],
      name: "CREATOR_NFT_ID",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "POAT_NFT_ID",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TOKEN_LIMIT",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "VENTURA",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address[]", name: "accounts", type: "address[]" },
        { internalType: "uint256[]", name: "ids", type: "uint256[]" },
      ],
      name: "balanceOfBatch",
      outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "contractURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "counter",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "nft_metadata",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256[]", name: "ids", type: "uint256[]" },
        { internalType: "uint256[]", name: "values", type: "uint256[]" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeBatchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "bytes", name: "data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "_uri", type: "string" }],
      name: "setURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
      name: "uri",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
  ],
};

export const stableCoin = {
  address: "0x94b38F87880912aa4F46b4A7631315B933f67A2c",
  abi: [
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "allowance", type: "uint256" },
        { internalType: "uint256", name: "needed", type: "uint256" },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        { internalType: "address", name: "sender", type: "address" },
        { internalType: "uint256", name: "balance", type: "uint256" },
        { internalType: "uint256", name: "needed", type: "uint256" },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "approver", type: "address" }],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "receiver", type: "address" }],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "sender", type: "address" }],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "spender", type: "address" }],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
//Owner: 0xF2E7E2f51D7C9eEa9B0313C2eCa12f8e43bd1855
//StableToken: 0x94b38F87880912aa4F46b4A7631315B933f67A2c
//VenturaTokens: 0x442576ef8EA93B6aA30cb7C779b8cC1e402bca5e
//Ventura: 0xBbcD22fd30EFA3c859f3C30a7224aB257D20b112
