import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  signupError: string | null = null;

  constructor(private router: Router) {}

  onSubmit(): void {
  
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    if (!storedUsers) { 
   alert("sign up failed");
    }
    
    const userExists = storedUsers.find((user: any) => user.username === this.username || user.email === this.email);
    if (userExists) {
      this.signupError = 'User with this username or email already exists.';
    } else {
      
      storedUsers.push({
        username: this.username,
        email: this.email,
        password: this.password
      });
      localStorage.setItem('users', JSON.stringify(storedUsers));

      this.router.navigate(['/login']);
    }
  }
}