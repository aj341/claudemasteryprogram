import "server-only";
import Stripe from "stripe";

let _client: Stripe | null = null;

/**
 * Returns a singleton Stripe client. Lazy so that build-time / preview
 * environments without STRIPE_SECRET_KEY don't crash on import.
 *
 * Pinned API version to keep payload shapes stable across Stripe upgrades.
 */
export function stripe(): Stripe {
  if (_client) return _client;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  _client = new Stripe(key, {
    apiVersion: "2024-11-20.acacia",
    typescript: true,
    appInfo: {
      name: "claude-mastery-program",
      version: "1.0.0"
    }
  });
  return _client;
}

export const STRIPE_WEBHOOK_SECRET = () => {
  const v = process.env.STRIPE_WEBHOOK_SECRET;
  if (!v) throw new Error("STRIPE_WEBHOOK_SECRET is not set");
  return v;
};

export const STRIPE_PRICE_CORE = () => process.env.STRIPE_PRICE_CORE ?? null;
