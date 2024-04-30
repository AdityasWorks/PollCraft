export const ABI = [
    {
        inputs: [],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "Ended",
        type: "error",
    },
    {
        inputs: [],
        name: "NotEndedYet",
        type: "error",
    },
    {
        inputs: [],
        name: "NotStartedYet",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyLord",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "voteWiner",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "numberVote",
                type: "uint256",
            },
        ],
        name: "LogEndVoting",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
        ],
        name: "LogStartVoting",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "votes",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "candidate",
                type: "string",
            },
        ],
        name: "LogVote",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "name",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
        ],
        name: "StartVoting",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "Votes",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "bool",
                name: "vote",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "candidates",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "voteCount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "endAt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "endVoting",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "ended",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllCondidate",
        outputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "voteCount",
                        type: "uint256",
                    },
                ],
                internalType: "struct Voting.Candidate[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lord",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "started",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "candidate",
                type: "uint256",
            },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "voteWiner",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
