# Food Plan

More food, fewer calories.

## Goals

1. Keep track of pantry
2. Find/manage available recipes 
3. Create/manage weekly food plan
4. Log calories
5. Generate/manage shopping list

## Usage

### Keep track of pantry

#### Add food

`node bin/cli.js add --food <food-name>`

#### Find food

`node bin/cli.js find --food <food-name>`

#### Add food to pantry

`node bin/cli.js add --food <food-name> --to-pantry`

### Find/manage available recipes

#### Find ready-to-be-made recipes

`node bin/cli.js shake`

#### Find recipe

`node bin/cli.js find --recipe <recipe-title>`

#### Create recipe

`node bin/cli.js add --recipe <recipe-title>`

#### Edit recipe

`node bin/cli.js edit --recipe <recipe-title>`

### Create/manage weekly food plan

#### Plan recipes

`node bin/cli.js plan --add-recipe <recipe-title>`

Which day:
- `--today`
- `--yesterday`
- `--day <date>`

#### Add a food item to a day plan

`node bin/cli.js plan --add-food <food-name> --food-group <food-group>`

Which day:
- `--today`
- `--yesterday`
- `--day <date>`

#### Edit plan

`node bin/cli.js plan --edit`

Which day:
- `--today`
- `--yesterday`
- `--day <date>`

### Log calories

#### Show nutrition for a day

`node bin/cli.js plan --show-nutrition-info`

Which day:
- `--today`
- `--yesterday`
- `--day <date>`

### Generate/manage shopping list

#### Show shopping list for the coming days

`node bin/cli.js shopping-list --days <number-of-days>`

Starting day:
- `--day <date>`
