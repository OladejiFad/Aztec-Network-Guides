import React, { useState } from "react";

export default function ProgramsSection() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections({
      ...openSections,
      [key]: !openSections[key],
    });
  };

  const linkStyle = { color: "#1E90FF", textDecoration: "underline" }; // bright blue

  return (
    <section className="community" id="programs">
      <h2>Aztec Network Programs & Guides</h2>
      <p>
        Everything a newcomer needs to get started in the Aztec Network Discord, participate in events, earn roles, run nodes, and interact with the community.
      </p>

      <div className="p-links accordion">

        {/* Town Hall */}
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection("townhall")}>
            📚 Town Hall (Every Thursday)
          </button>
          {openSections.townhall && (
            <div className="accordion-content">
              <p>Join every Thursday for discussions, updates, and community Q&A.</p>
            </div>
          )}
        </div>

        {/* Games */}
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection("games")}>
            🎮 Games
          </button>
          {openSections.games && (
            <div className="accordion-content">
              <p>Participate in community games and competitions.</p>
            </div>
          )}
        </div>

        {/* How to Get Roles */}
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection("roles")}>
            🛡️ How to Get Roles
          </button>
          {openSections.roles && (
            <div className="accordion-content role-links">
              <p>🎉 Newcomers: Check the links below to get your roles ⬇🍺</p>
              <p>📚 Roles Info: &lt;#1370430147618144366&gt;</p>
              <p>📰 Updates: &lt;#1144693465519763546&gt;</p>
              <p>💻 Node Guide: &lt;#1368138495809294366&gt;</p>
              <p>⚡ Working RPCs: &lt;#1371039162857427034&gt;</p>
              <p>🛠 Node Troubleshooting: &lt;#1366895862042722395&gt;</p>
              <p>🎬 Testnet Info: Check Aztec's YouTube + &lt;#1367346337858981989&gt;</p>
              <p>🎨 Arts & Memes: &lt;#1367364636550234232&gt;</p>
              <p>✅ Interact in these channels to get your roles, join discussions, and start participating in the Aztec community!</p>
            </div>
          )}
        </div>

        {/* How to Run Node */}
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection("node")}>
            🛠️ How to Run an Aztec Node
          </button>
          {openSections.node && (
            <div className="accordion-content node-guide">
              <p><strong>Step 1: Choose Node Type</strong></p>
              <p>- Sequencer Node: Proposes blocks and validates transactions.</p>
              <p>- Prover Node: Generates zero-knowledge proofs.</p>

              <p><strong>Step 2: Hardware & Software Requirements</strong></p>
              <p>CPU: 4–9 cores, RAM: 8–16 GB, Storage: 100+ GB SSD, Network: 25 Mbps minimum, OS: Ubuntu recommended, Dependencies: Docker, Docker Compose, Git, curl, jq</p>

              <p><strong>Step 3: Install Docker & Tools</strong></p>
              <pre style={{ background: "#111", color: "#0ff", padding: "1rem", borderRadius: "8px", overflowX: "auto" }}>
<code>
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose git curl jq -y
bash -i &lt;(curl -s https://install.aztec.network)
</code>
              </pre>

              <p><strong>Step 4: Configure Your Node</strong></p>
              <p>
                ETHEREUM_RPC_URL=your_rpc_url<br />
                CONSENSUS_BEACON_URL=your_beacon_url<br />
                VALIDATOR_PRIVATE_KEY=your_private_key<br />
                COINBASE=your_ethereum_address<br />
                P2P_IP=your_server_ip
              </p>

              <p><strong>Step 5: Start the Node</strong></p>
              <p>Run: <code>docker-compose up -d</code> and check logs to ensure syncing.</p>

              <p><strong>Step 6: Claim Your Roles</strong></p>
              <p>After running your node, go to Discord and interact with the <code>#operators | start-here</code> channel to claim roles like <strong>Apprentice</strong> and <strong>Guardian</strong>.</p>

              <p>
                📚 More info: <a style={linkStyle} href="https://docs.aztec.network/the_aztec_network" target="_blank" rel="noopener noreferrer">Aztec Network Docs</a>
              </p>
            </div>
          )}
        </div>

        {/* Interact */}
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection("interact")}>
            💬 Interacting with Others
          </button>
          {openSections.interact && (
            <div className="accordion-content">
              <p>Join discussions, ask questions, and collaborate in community channels.</p>
            </div>
          )}
        </div>

        {/* Guides */}
        <div className="accordion-item">
          <button className="accordion-button" onClick={() => toggleSection("guides")}>
            📜 Guides & Resources
          </button>
          {openSections.guides && (
            <div className="accordion-content">
              <p>Check out tutorials, documentation, and helpful resources to get started with Aztec.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
