
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Submit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Proposal Submitted",
        description: "We've received your business proposal and will review it soon.",
      });
      
      // Reset form (in a real app, you'd use a form library like react-hook-form)
      const form = e.target as HTMLFormElement;
      form.reset();
      setUploadedFile(null);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Submit Your Proposal</h1>
            <p className="text-gray-600 text-center mb-8">
              Share your business idea and proposal for investment consideration.
            </p>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Business Proposal Application</CardTitle>
                <CardDescription>
                  Please fill out this form completely and upload your detailed business plan in PDF format.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last Name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Phone Number" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company/Startup Name</Label>
                      <Input id="companyName" placeholder="Company Name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (if applicable)</Label>
                      <Input id="website" type="url" placeholder="https://www.example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select required>
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="financial">Financial Services</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail & Consumer</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="energy">Energy & Sustainability</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fundingStage">Funding Stage</Label>
                      <Select required>
                        <SelectTrigger id="fundingStage">
                          <SelectValue placeholder="Select Funding Stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="seriesA">Series A</SelectItem>
                          <SelectItem value="seriesB">Series B or Later</SelectItem>
                          <SelectItem value="growth">Growth/Expansion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fundingAmount">Funding Amount Requested ($)</Label>
                      <Select required>
                        <SelectTrigger id="fundingAmount">
                          <SelectValue placeholder="Select Amount Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessSummary">Business Summary</Label>
                      <Textarea 
                        id="businessSummary" 
                        placeholder="Briefly describe your business or idea (250 words max)"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessPlan">Business Plan (PDF)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="file"
                          id="businessPlan"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleFileChange}
                          required
                        />
                        <label htmlFor="businessPlan" className="cursor-pointer">
                          {uploadedFile ? (
                            <div className="text-investment-700">
                              <p className="font-medium">{uploadedFile.name}</p>
                              <p className="text-sm text-gray-500">Click to change file</p>
                            </div>
                          ) : (
                            <div>
                              <p className="font-medium text-gray-700">Click to upload your business plan</p>
                              <p className="text-sm text-gray-500">PDF format only, max 10MB</p>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea 
                        id="additionalInfo" 
                        placeholder="Anything else you'd like us to know?"
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      className="w-full bg-investment-700 hover:bg-investment-800 text-white"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Proposal"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our terms and privacy policy.
                      We'll review your submission and contact you if there's interest.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Submit;
