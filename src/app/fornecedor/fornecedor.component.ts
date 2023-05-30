import { Component, OnInit } from '@angular/core';
import { Fornecedor} from './../Fornecedor';
import { FornecedorService } from '../fornecedor.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './Fornecedor.component.html',
  styleUrls: ['./Fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  Fornecedores: Fornecedor[] = [];
  isEditing: boolean = false;
  formGroupFornecedor: FormGroup;

  constructor(private FornecedorService: FornecedorService, private formBuilder: FormBuilder) {
    this.formGroupFornecedor = this.formBuilder.group({
      id: [''],
      genero: [''],
      name: [''],
      telefone: [''],
      email: [''],
      endereco: [''],
      regiao: ['']
    });
  }

  save() {
    if (this.isEditing) {
      this.FornecedorService.update(this.formGroupFornecedor.value).subscribe({
        next: () => {
          this.loadFornecedores();
          this.formGroupFornecedor.reset();
          this.isEditing = false;
        }
      })
    }

    else {
      this.FornecedorService.save(this.formGroupFornecedor.value).subscribe({
        next: data => {
          this.Fornecedores.push(data);
          this.formGroupFornecedor.reset();
        }
      })
    }
  }

  ngOnInit() : void {
    this.loadFornecedores();
  }

  loadFornecedores() {
    this.
    FornecedorService.getFornecedor().subscribe({
      next: data => this.Fornecedores = data
    });
  }

  edit(fornecedor: Fornecedor) {
    this.formGroupFornecedor.setValue(fornecedor);
    this.isEditing = true;
  }

  delete(fornecedor: Fornecedor) {
    this.FornecedorService.delete(fornecedor).subscribe({
      next: () => this.loadFornecedores()
    });
  }
}
