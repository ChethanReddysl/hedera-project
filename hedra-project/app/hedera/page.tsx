"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Coins, Send, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HederaPage() {
  const [tokenCreated, setTokenCreated] = useState(false)
  const [minted, setMinted] = useState(false)
  const [distributed, setDistributed] = useState(false)

  const handleCreateToken = () => {
    setTokenCreated(true)
  }

  const handleMintTokens = () => {
    setMinted(true)
  }

  const handleDistribute = () => {
    setDistributed(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 blur-3xl" />
        <div className="relative px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
                Hedera Fungible Token
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create, transfer, and manage fungible tokens on the Hedera network with multi-account distribution
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Token Creation */}
            <Card className="p-6 border-2 border-border/50 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Token Creation</h3>
                <Coins className="w-6 h-6 text-purple-500" />
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Token Name</p>
                  <p className="font-semibold">MyToken (MTK)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Token ID</p>
                  <p className="font-mono text-sm">0.0.56789</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Initial Supply</p>
                  <p className="font-semibold">1,000 tokens</p>
                </div>
              </div>
              <Button
                onClick={handleCreateToken}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                {tokenCreated ? "✓ Token Created" : "Create Token"}
              </Button>
            </Card>

            {/* Token Transfer */}
            <Card className="p-6 border-2 border-border/50 hover:border-pink-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Token Transfer</h3>
                <Send className="w-6 h-6 text-pink-500" />
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Treasury Balance</p>
                  <p className="font-semibold text-lg">950 tokens</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Recipient Balance</p>
                  <p className="font-semibold text-lg">50 tokens</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-semibold text-green-500">Transferred</p>
                </div>
              </div>
              <Button
                disabled
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
              >
                ✓ Transfer Complete
              </Button>
            </Card>

            {/* Bonus Features */}
            <Card className="p-6 border-2 border-border/50 hover:border-red-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Bonus Features</h3>
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Minting</p>
                  <p className="font-semibold">+500 tokens</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Distribution</p>
                  <p className="font-semibold">2 accounts</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Final Supply</p>
                  <p className="font-semibold">1,500 tokens</p>
                </div>
              </div>
              <Button
                onClick={handleDistribute}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              >
                {distributed ? "✓ Distributed" : "Distribute"}
              </Button>
            </Card>
          </div>

          {/* Transaction Details */}
          <Card className="p-8 border-2 border-border/50">
            <h2 className="text-2xl font-bold mb-6">Transaction Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Step 1: Token Creation</p>
                  <p className="font-mono text-sm">createFungibleToken("MyToken", "MTK", 1000)</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Step 2: Token Transfer</p>
                  <p className="font-mono text-sm">transferTokens(recipient, 50)</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Step 3: Mint Additional</p>
                  <p className="font-mono text-sm">mintTokens(500)</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">Step 4: Multi-Account Distribution</p>
                  <p className="font-mono text-sm">distributeToMultiple([account1, account2])</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Output Summary */}
          <Card className="p-8 border-2 border-green-500/50 bg-green-500/5 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Expected Output</h2>
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <p>Token Created: MyToken (0.0.56789)</p>
              <p>Treasury Balance: 950</p>
              <p>Recipient Balance: 50</p>
              <p className="text-green-600 font-semibold">✓ All transactions successful</p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
