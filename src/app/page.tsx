'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';

export default function Home() {
  const [isLoadingPrimary, setIsLoadingPrimary] = useState(false);
  const [isLoadingSecondary, setIsLoadingSecondary] = useState(false);

  const handlePrimaryClick = async () => {
    setIsLoadingPrimary(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoadingPrimary(false);
    alert('Primary button clicked!');
  };

  const handleSecondaryClick = async () => {
    setIsLoadingSecondary(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoadingSecondary(false);
    alert('Secondary button clicked!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            TCoLDS Button Component
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Polished sample app demonstrating standardized button primitives with
            comprehensive state management and UI polish
          </p>
        </div>

        {/* Button Showcase */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Button Variants
          </h2>

          {/* Primary Buttons */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Primary Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="sm"
                onClick={handlePrimaryClick}
                data-testid="primary-sm"
              >
                Small
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handlePrimaryClick}
                data-testid="primary-md"
              >
                Medium
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimaryClick}
                data-testid="primary-lg"
              >
                Large
              </Button>
              <Button
                variant="primary"
                disabled
                data-testid="primary-disabled"
              >
                Disabled
              </Button>
              <Button
                variant="primary"
                isLoading={isLoadingPrimary}
                onClick={handlePrimaryClick}
                data-testid="primary-loading"
              >
                Click to Load
              </Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Secondary Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleSecondaryClick}
                data-testid="secondary-sm"
              >
                Small
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={handleSecondaryClick}
                data-testid="secondary-md"
              >
                Medium
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSecondaryClick}
                data-testid="secondary-lg"
              >
                Large
              </Button>
              <Button
                variant="secondary"
                disabled
                data-testid="secondary-disabled"
              >
                Disabled
              </Button>
              <Button
                variant="secondary"
                isLoading={isLoadingSecondary}
                onClick={handleSecondaryClick}
                data-testid="secondary-loading"
              >
                Click to Load
              </Button>
            </div>
          </div>

          {/* Tertiary Buttons */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Tertiary Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="tertiary"
                size="sm"
                data-testid="tertiary-sm"
              >
                Small
              </Button>
              <Button
                variant="tertiary"
                size="md"
                data-testid="tertiary-md"
              >
                Medium
              </Button>
              <Button
                variant="tertiary"
                size="lg"
                data-testid="tertiary-lg"
              >
                Large
              </Button>
              <Button
                variant="tertiary"
                disabled
                data-testid="tertiary-disabled"
              >
                Disabled
              </Button>
            </div>
          </div>

          {/* Danger Buttons */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Danger Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="danger"
                size="sm"
                data-testid="danger-sm"
              >
                Delete (Small)
              </Button>
              <Button
                variant="danger"
                size="md"
                data-testid="danger-md"
              >
                Delete (Medium)
              </Button>
              <Button
                variant="danger"
                size="lg"
                data-testid="danger-lg"
              >
                Delete (Large)
              </Button>
              <Button
                variant="danger"
                disabled
                data-testid="danger-disabled"
              >
                Delete (Disabled)
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ✨ Variants
            </h3>
            <p className="text-gray-600">
              Primary, secondary, tertiary, and danger buttons for different
              use cases
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📏 Sizes
            </h3>
            <p className="text-gray-600">
              Small, medium, and large button sizes with responsive padding
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ⚡ States
            </h3>
            <p className="text-gray-600">
              Support for hover, active, disabled, and loading states with
              smooth transitions
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}