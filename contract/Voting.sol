// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }
    struct SVotes {
        string name;
        bool vote;
    }
    address public lord;
    bool public started;
    bool public ended;
    string public voteWiner;
    uint256 public endAt;
    Candidate[] public candidates;

    mapping(address => SVotes) public Votes;

    event LogVote(address votes, string candidate);
    event LogStartVoting(uint256 endTime);
    event LogEndVoting(string voteWiner, uint256 numberVote);

    error OnlyLord();
    error NotStartedYet();
    error NotEndedYet();
    error Ended();

    modifier onlyLord() {
        if (msg.sender != lord) {
            revert OnlyLord();
        }
        _;
    }
    modifier isStart() {
        if (!started) {
            revert NotStartedYet();
        }
        _;
    }
    modifier isEnded() {
        if (block.timestamp < endAt) {
            revert NotEndedYet();
        }
        _;
    }
    modifier isNotEnded() {
        if (block.timestamp > endAt) {
            revert Ended();
        }
        _;
    }

    constructor() payable {
        lord = msg.sender;
        Votes[lord].vote = true;
    }

    function StartVoting(string[] memory name, uint256 endTime)
        external
        onlyLord
    {
        require(!started, "Voting has started");
        require(name.length >= 2, "less than two condidates");
        require(endTime > 100, "Voting time is very short");
        for (uint256 i = 0; i < name.length; i++) {
            candidates.push(Candidate({name: name[i], voteCount: 0}));
        }
        endAt = block.timestamp + endTime;
        started = true;
        emit LogStartVoting(endAt);
    }

    function vote(uint256 candidate) external isStart isNotEnded {
        require(candidates.length > candidate, "No candidate found");
        require(!Votes[msg.sender].vote, "You have cast your vote");
        Votes[msg.sender] = SVotes(candidates[candidate].name, true);
        candidates[candidate].voteCount += 1;
        emit LogVote(msg.sender, candidates[candidate].name);
    }

    function endVoting() external onlyLord isEnded {
        require(!ended, "Voting has ended");

        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < candidates.length; p++) {
            if (candidates[p].voteCount > winningVoteCount) {
                winningVoteCount = candidates[p].voteCount;
                voteWiner = candidates[p].name;
            }
        }
        ended = true;
    }

    function getAllCondidate() external view returns (Candidate[] memory) {
        return candidates;
    }
}
