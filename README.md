# Module Boilerplate

Automatically generates Luau module boilerplate whenever you create a new `.lua` or `.luau` file.

If the newly created file is empty, the extension inserts a basic module template using the file's name as the module variable.

## Features

* Automatically detects newly created `.lua` and `.luau` files.
* Only generates boilerplate if the file is empty.
* Uses the filename as the module name.
* Removes spaces (` `), hyphens (`-`), and underscores (`_`) from the variable name to produce a valid Luau identifier.
* Displays a confirmation notification after the boilerplate has been generated.

### Example

Creating a file named:

```text
PlayerController.luau
```

Generates:

```lua
local PlayerController = {}

return PlayerController
```

Creating a file named:

```text
Player_Controller.luau
```

Generates:

```lua
local PlayerController = {}

return PlayerController
```

## Requirements

No additional configuration is required.

Simply install the extension and create a new empty `.lua` or `.luau` file inside your workspace.

## Extension Settings

This extension does not contribute any custom settings.

## Known Issues

Currently, only spaces, hyphens, and underscores are removed from filenames when generating the module variable. Other special characters are not sanitized.

## Release Notes

### 1.0.0

* Initial release.
* Automatic boilerplate generation for new `.lua` and `.luau` files.
* Filename-based module variable generation.
* Automatic filename sanitization for spaces, hyphens, and underscores.
