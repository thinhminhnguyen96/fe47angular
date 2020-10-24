import { Pipe, PipeTransform } from "@angular/core";
import { validateLocaleAndSetLanguage } from "typescript";

@Pipe({
  name: "shortcut",
})
export class ShortcutPipe implements PipeTransform {
  transform(value: string, limit = 30): unknown {
    return value.length > limit ? value.substr(0, limit) + " ... " : value;
  }
}
