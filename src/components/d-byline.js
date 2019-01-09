// Copyright 2018 The Distill Template Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// import style from '../styles/d-byline.css';

export function bylineTemplate(frontMatter) {
  return `
  <div class="byline grid">
    <div>
      <h3>Lecturers</h3>
      ${frontMatter.lecturers.map(lecturer => `
        <p class="lecturer">
          ${lecturer.personalURL ? `
            <a class="name" href="${lecturer.personalURL}" target="_blank">${lecturer.name}</a>` : `
            <span class="name">${lecturer.name}</span>`}
        </p>
      `).join('')}
    </div>
    <div>
      <h3>Authors</h3>
      ${frontMatter.authors.map(author => `
        <p class="author">
          ${author.personalURL ? `
            <a class="name" href="${author.personalURL}" target="_blank">${author.name}</a>` : `
            <span class="name">${author.name}</span>`}
        </p>
      `).join('')}
    </div>
    <div>
      <h3>Editors</h3>
      ${frontMatter.editors.map(editor => `
        <p class="editor">
          ${editor.personalURL ? `
            <a class="name" href="${editor.personalURL}" target="_blank">${editor.name}</a>` : `
            <span class="name">${editor.name}</span>`}
        </p>
      `).join('')}
    </div>
    <div>
      <h3>Published</h3>
      ${frontMatter.publishedDate ? `
        <p>${frontMatter.publishedMonth} ${frontMatter.publishedDay}, ${frontMatter.publishedYear}</p> ` : `
        <p><em>Not published yet.</em></p>`}
    </div>
  </div>
`;
}

export class Byline extends HTMLElement {

  static get is() { return 'd-byline'; }

  set frontMatter(frontMatter) {
    this.innerHTML = bylineTemplate(frontMatter);
  }

}
