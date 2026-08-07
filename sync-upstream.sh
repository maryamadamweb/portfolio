#!/usr/bin/env bash
# Pulls the latest changes from the client's repo (upstream) into my fork (origin),
# then deploys the result to my own Vercel account so I can show progress without
# touching her production deployment or Vercel usage.
set -euo pipefail

BRANCH="main"

echo "Fetching upstream..."
git fetch upstream

echo "Merging upstream/${BRANCH} into local ${BRANCH}..."
git checkout "${BRANCH}"
git merge "upstream/${BRANCH}"

echo "Pushing to my fork (origin)..."
git push origin "${BRANCH}"

echo "Deploying to my Vercel account..."
npx vercel --prod --yes

echo "Done. Sync + deploy complete."
