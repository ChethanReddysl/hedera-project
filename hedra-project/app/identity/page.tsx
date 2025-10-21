"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function IdentityPage() {
  const handleDownloadPDF = () => {
    // Create a simple PDF download
    const element = document.getElementById("identity-content")
    if (element) {
      const printWindow = window.open("", "", "height=600,width=800")
      if (printWindow) {
        printWindow.document.write(element.innerHTML)
        printWindow.document.close()
        printWindow.print()
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-3xl" />
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
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-4">
                Blockchain for Digital Identity
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive research on how blockchain revolutionizes digital identity management
              </p>
              <Button
                onClick={handleDownloadPDF}
                className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Download as PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" id="identity-content">
          {/* Document Content */}
          <div className="space-y-8">
            {/* Title Section */}
            <div className="text-center py-8 border-b-2 border-border/50">
              <h1 className="text-4xl font-bold mb-2">Blockchain for Digital Identity Management</h1>
              <p className="text-muted-foreground">A Comprehensive Research Document</p>
              <p className="text-sm text-muted-foreground mt-4">Date: December 2024</p>
            </div>

            {/* Executive Summary */}
            <Card className="p-8 border-2 border-green-500/30 bg-green-500/5">
              <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Blockchain technology presents a revolutionary approach to digital identity management by providing
                enhanced security, improved privacy, and greater user control. This document explores how blockchain can
                transform identity verification, reduce fraud, and empower individuals with ownership of their digital
                credentials.
              </p>
            </Card>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction and Background</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Digital identity is fundamental to modern society, enabling access to services, financial systems, and
                  government benefits. However, traditional centralized identity systems face significant challenges:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Data breaches exposing millions of personal records</li>
                  <li>Identity theft and fraud affecting billions globally</li>
                  <li>Limited user control over personal information</li>
                  <li>Fragmented systems across different organizations</li>
                  <li>Exclusion of 1.1 billion people without formal identity</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Blockchain's Role in Digital Identity</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Blockchain technology offers a decentralized, immutable, and transparent solution to identity
                  management:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Card className="p-4 border border-border/50">
                    <h3 className="font-bold mb-2">Decentralization</h3>
                    <p className="text-sm">
                      No single point of failure; identity data distributed across network nodes
                    </p>
                  </Card>
                  <Card className="p-4 border border-border/50">
                    <h3 className="font-bold mb-2">Immutability</h3>
                    <p className="text-sm">Once recorded, identity records cannot be altered or deleted</p>
                  </Card>
                  <Card className="p-4 border border-border/50">
                    <h3 className="font-bold mb-2">Transparency</h3>
                    <p className="text-sm">All transactions visible to authorized parties; audit trails maintained</p>
                  </Card>
                  <Card className="p-4 border border-border/50">
                    <h3 className="font-bold mb-2">User Control</h3>
                    <p className="text-sm">Individuals own and control their identity credentials</p>
                  </Card>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Key Benefits and Impact</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h3 className="font-bold mb-2 text-foreground">Enhanced Security</h3>
                    <p className="text-sm">Cryptographic protection prevents unauthorized access and tampering</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h3 className="font-bold mb-2 text-foreground">Improved Privacy</h3>
                    <p className="text-sm">
                      Users share only necessary information; zero-knowledge proofs enable verification without
                      disclosure
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h3 className="font-bold mb-2 text-foreground">Reduced Fraud</h3>
                    <p className="text-sm">Immutable records and cryptographic verification eliminate identity fraud</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h3 className="font-bold mb-2 text-foreground">Financial Inclusion</h3>
                    <p className="text-sm">Enables access to banking and services for unbanked populations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Case Studies</h2>
              <div className="space-y-4">
                <Card className="p-6 border border-border/50">
                  <h3 className="font-bold mb-2">Estonia e-Residency Program</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Estonia has implemented a blockchain-based digital identity system serving over 70,000 e-residents
                    globally. The system uses X-Road infrastructure and Keyless Signature Infrastructure (KSI) for
                    secure identity verification.
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    Result: 99.99% system uptime, zero identity fraud cases
                  </p>
                </Card>

                <Card className="p-6 border border-border/50">
                  <h3 className="font-bold mb-2">Sovrin Network</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A decentralized identity network enabling self-sovereign identity (SSI). Users control their
                    credentials without relying on centralized authorities.
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    Result: 500,000+ active identities, partnerships with major institutions
                  </p>
                </Card>

                <Card className="p-6 border border-border/50">
                  <h3 className="font-bold mb-2">Aadhaar + Blockchain Integration</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    India's Aadhaar system combined with blockchain for enhanced security and privacy. Enables secure
                    credential sharing while maintaining data protection.
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    Result: Serving 1.3+ billion citizens with improved security
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Comparison: Blockchain vs Traditional Systems</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border/50">
                      <th className="text-left p-3 font-bold">Aspect</th>
                      <th className="text-left p-3 font-bold">Blockchain-Based</th>
                      <th className="text-left p-3 font-bold">Traditional Systems</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/30">
                      <td className="p-3">Control</td>
                      <td className="p-3">User-controlled</td>
                      <td className="p-3">Organization-controlled</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-3">Security</td>
                      <td className="p-3">Cryptographic, immutable</td>
                      <td className="p-3">Centralized, vulnerable</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-3">Privacy</td>
                      <td className="p-3">Selective disclosure</td>
                      <td className="p-3">Limited control</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-3">Accessibility</td>
                      <td className="p-3">Global, 24/7</td>
                      <td className="p-3">Limited by geography</td>
                    </tr>
                    <tr>
                      <td className="p-3">Cost</td>
                      <td className="p-3">Lower operational costs</td>
                      <td className="p-3">Higher infrastructure costs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Future Trends and Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-3 text-green-600">Future Opportunities</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Integration with IoT devices for automated verification</li>
                    <li>• Cross-chain identity interoperability</li>
                    <li>• AI-powered fraud detection</li>
                    <li>• Quantum-resistant cryptography</li>
                    <li>• Decentralized credential marketplaces</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-orange-600">Challenges to Address</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Regulatory compliance across jurisdictions</li>
                    <li>• Scalability and transaction speed</li>
                    <li>• User experience and adoption</li>
                    <li>• Interoperability between systems</li>
                    <li>• Recovery mechanisms for lost credentials</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <Card className="p-8 border-2 border-green-500/30 bg-green-500/5">
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Blockchain technology has the potential to revolutionize digital identity management by providing a
                secure, transparent, and user-centric alternative to traditional systems. As demonstrated by successful
                implementations like Estonia's e-Residency and Sovrin Network, blockchain-based identity solutions can
                enhance security, improve privacy, and increase accessibility. While challenges remain in scalability,
                regulation, and user adoption, the trajectory is clear: blockchain will play an increasingly important
                role in shaping the future of digital identity.
              </p>
            </Card>

            {/* Footer */}
            <div className="text-center py-8 border-t-2 border-border/50 text-sm text-muted-foreground">
              <p>© 2025 Task Solutions Research Document</p>
              <p>Blockchain for Digital Identity Management</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
