import { Component, OnInit } from '@angular/core';
import { Client} from './../Client';
import { ClientService } from '../client.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './Client.component.html',
  styleUrls: ['./Client.component.css']
})
export class ClientComponent implements OnInit {
  Clients: Client[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private clientService: ClientService, private formBuilder: FormBuilder) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: [''],
      idade: [''],
      telefone: [''],
      email: [''],
      cpf: ['']
    });
  }

  save() {
    if (this.isEditing) {
      this.clientService.update(this.formGroupClient.value).subscribe({
        next: () => {
          this.loadClients();
          this.formGroupClient.reset();
          this.isEditing = false;
        }
      })
    }

    else {
      this.clientService.save(this.formGroupClient.value).subscribe({
        next: data => {
          this.Clients.push(data);
          this.formGroupClient.reset();
        }
      })
    }
  }

  ngOnInit() : void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClient().subscribe({
      next: data => this.Clients = data
    });
  }

  edit(client: Client) {
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }

  delete(client: Client) {
    this.clientService.delete(client).subscribe({
      next: () => this.loadClients()
    });
  }
}
